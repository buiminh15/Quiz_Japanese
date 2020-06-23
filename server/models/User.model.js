const mongoose = require("mongoose");


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
 * @typedef User
 */
 module.exports = mongoose.model('User', userSchema)
