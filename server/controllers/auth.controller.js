const User = require('../models/User.model'); // Import User Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/config')

const validateRegisterInput =  require('../validator/register.valid')

exports.register = async (req, res, next) => {
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    // Create new user object and apply user input
    let user = new User({
        username: req.body.username,
        email: req.body.email.toLowerCase(),
        role: req.body.role
    });
    user.password = user.generateHash(req.body.password)
    // Save user to database
    await user.save((err) => {
        // Check if error occured
        if (err && err.code === 11000) {
            errors.email = 'Username or e-mail already exists'
            return res.status(400).json(errors)
        }
        // Check if error is a validation rror
        if (err) {
            errors.errModel = 'err model'
            return res.status(400).json(errors) // Return any other error not already covered
        }
        res.status(201).json({ success: true, message: 'Acount registered!' }); // Return success 
    });
}


exports.login = async (req, res, next) => {
    // Check if username was provided
    if (!req.body.email) {
        res.json({ success: false, message: 'No email was provided' }); // Return error
        return
    }
    // Check if password was provided
    if (!req.body.password) {
        res.json({ success: false, message: 'No password was provided.' }); // Return error
        return
    }

    // Check if username exists in database
    await User.findOne({ email: req.body.email }, (err, user) => {
        // Check if error was found
        if (err) {
            return res.json({ success: false, message: err }); // Return error  
        }
        // Check if username was found
        if (!user) {
            return res.status(200).json({ success: false, message: 'Username not found.' }); // Return error   
        }

        const validPassword = user.comparePassword(req.body.password); // Compare password provided to password in database
        // Check if password is a match
        if (!validPassword) {
            return res.status(200).json({ success: false, message: 'Password invalid' }); // Return error
        }
        const token = jwt.sign({ userId: user._id }, config.SECRET_KEY, { expiresIn: config.LIFE_TIME_TOKEN }); // Create a token for client
        res.json({
            success: true,
            message: 'Success!',
            token: token,
            user: {
                username: user.name
            }
        }); // Return success and token to frontend
    });
}