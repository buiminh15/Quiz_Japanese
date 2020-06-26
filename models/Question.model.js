const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')

/**
 * Question Schema
 * @private
 */
const levels = ["N1", "N2", "N3", "N4", "N5"]
const categories = ["1", "2", "3"]
const questionSchema = new mongoose.Schema(
    {
        creator: {
            type: mongoose.Schema.ObjectId,
            ref: "User"
        },
        quiz: [
            {
                level: {
                    type: String,
                    enum: levels
                },
                question: {
                    type: String
                },
                choices: [{
                    type: String
                }],
                answer: {
                    type: String,
                },
                category: {
                    type: String,
                    enum: categories
                },
                translate: [
                    { type: Object }
                ]
            }
        ]
    }
);

module.exports = mongoose.model('Question', questionSchema)
