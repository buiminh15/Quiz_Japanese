const User = require('../models/User.model'); // Import User Model Schema
const jwt = require('jsonwebtoken'); // Compact, URL-safe means of representing claims to be transferred between two parties.
const config = require('../config/config')

exports.register = async (req, res, next) => {
    // Check if email was provided
    if (!req.body.username) {
        res.json({ success: false, message: 'You must provide a username' }); // Return error
        return
    }
    // Check if username was provided
    if (!req.body.email) {
        res.json({ success: false, message: 'You must provide a email' }); // Return error
        return
    }
    // Check if password was provided
    if (!req.body.password) {
        res.json({ success: false, message: 'You must provide a password' }); // Return error
        return
    }

    // Create new user object and apply user input
    let user = new User({
        username: req.body.username,
        email: req.body.email.toLowerCase(),
        role: req.body.role
    });
    user.password = user.generateHash(req.body.password)
    // Save user to database
    await user.save(async (err) => {
        // Check if error occured
        if (err && err.code === 11000) {
            // Check if error is an error indicating duplicate account
            return res.json({ success: false, message: 'Username or e-mail already exists' }); // Return error

        }
        // Check if error is a validation rror
        if (err) {
            res.json({ success: false, message: err }); // Return any other error not already covered
            return
        }
        if (err && err.errors) {
            // Check if validation error is in the email field
            if (err.errors.email) {
                res.json({ success: false, message: err.errors.email.message }); // Return error
                return
            }
            // Check if validation error is in the username field
            if (err.errors.name) {
                res.json({ success: false, message: err.errors.name.message }); // Return error
                return
            }
            // Check if validation error is in the password field
            if (err.errors.password) {
                res.json({ success: false, message: err.errors.password.message }); // Return error
                return
            }
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