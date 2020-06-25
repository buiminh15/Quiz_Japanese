const User = require("../models/User.model"); // Import User Model Schema
const jwt = require("jsonwebtoken"); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require("../config/config");

const validateRegisterInput = require("../validator/register.valid");
const validateLoginInput = require("../validator/login.valid");

// Register
exports.register = async (req, res, next) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Create new user object and apply user input
  let user = new User({
    username: req.body.username,
    email: req.body.email.toLowerCase(),
    role: req.body.role,
  });
  user.password = user.generateHash(req.body.password);
  // Save user to database
  await user.save((err) => {
    // Check if error occured
    if (err && err.code === 11000) {
      errors.email = "Username or e-mail already exists";
      return res.status(400).json(errors);
    }
    // Check if error is a validation rror
    if (err) {
      errors.errModel = "error model";
      return res.status(400).json(errors); // Return any other error not already covered
    }
    res.status(201).json({ success: true, message: "Acount registered!" }); // Return success
  });
};

// Login
exports.login = async (req, res, next) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Check if username exists in database
  await User.findOne({ email: req.body.email }, (err, user) => {
    // Check if error was found
    if (err) {
      errors = err;
      return res.status(400).json(errors); // Return error
    }

    // Check if username was found
    if (!user) {
      errors.email = "Username not found.";
      return res.status(400).json(errors); // Return error
    }

    if (!user && !user.isVerify) {
      errors.verify = "User is not verify";
      return res.status(400).json(errors);
    }

    const validPassword = user.comparePassword(req.body.password); // Compare password provided to password in database
    // Check if password is a match
    if (!validPassword) {
      errors.password = "wrong password";
      return res.status(400).json(errors); // Return error
    }
    const token = jwt.sign({ userId: user._id }, config.SECRET_KEY, {
      expiresIn: config.LIFE_TIME_TOKEN,
    }); // Create a token for client
    res.json({
      success: true,
      message: "Success!",
      token: token,
      user: {
        username: user.username,
        email: user.email,
        role: user.role,
      },
    }); // Return success and token to frontend
  });
};

// Get All Unverified Users
exports.getUnverifiedUsers = async (req, res, next) => {
  await User.find({ isVerify: false }, function (err, users) {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    res.status(200).json({ users: users });
  });
}

// Confirm User
exports.confirmUser = async (req, res, next) => {
  const email = req.body.email
  await User.findOne({ email: email }, function (err, user) {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }

    // Verify and save the user
    if (!user.isVerify) {
      user.isVerify = true;
    }
    user.save(function (err) {
      if (err) { return res.status(500).json({ success: false, message: err.message }); }
      res.status(200).json("The account has been verified. Please log in.");
    });
  });
}

// Reject User
exports.rejectUser = async (req, res, next) => {
  const email = req.body.email
  const isVerify = req.body.isVerify

  if (isVerify) {
    return res.status(200).json("Cannot delete");
  }
  await User.deleteOne({ email: email }, (err, user) => {
    if (err) {
      return res.status(400).json({ success: false, message: err });
    }
    res.status(200).json("Deleted");
  })
}
