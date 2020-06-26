const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

/**
 * User Schema
 * @private
 */
const levels = ["N1","N2","N3","N4","N5"]
const categories = ["1","2","3"]
 const questionSchema = new mongoose.Schema(
     {
        level: {
            type: String,
            enum: levels
        },
        q: {
            type: String
        },
        choices: [{
            type: String
        }],
        a: {
            type: String
        },
        category: {
            type: String,
            enum: categories
        }, 
        creator: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        translate: [
            {type: Object}
        ]  
     }
 );
 
  
 module.exports = mongoose.model('Question', questionSchema)
