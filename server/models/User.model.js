const mongoose = require("mongoose");
const httpStatus = require("http-status");
const bcrypt = require("bcryptjs");
const moment = require("moment-timezone");


const Roles = ['user', 'admin'];

/**
 * User Schema
 * @private
 */

 const userSchema = new mongoose.Schema(
     {
         email:{
             type: String,
             match: /^\S+@\S+\.\S+$/,
             required: true,
             unique: true,
             trim: true,
             lowercase: true,
         },
         username:{
             type: String,
             required: true,
             minlength: 2,
             maxlength: 40,
         },
         password: {
             type: String,
             required: true,
             minlength: 6,
             maxlength: 128,
         },
         role: {
             type: String,
             enum: Roles,
             default: 'user'
         },
         created_on: {
             type: Date,
             default: Date.now
         }
     }
 );
 
 /**
  * hash password
  */
 userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  };
  
  userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password); // Return comparison of login password to password in database (true or false)
  };
  
  let User = mongoose.model('User', userSchema)



/**
 * @typedef User
 */
 module.exports = mongoose.model('User', userSchema)
