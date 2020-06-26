const Question = require('../models/Question.model')

exports.createQuestion = (req, res) => {
    // // Check if blog title was provided
    // if (!req.body.title) {
    //     res.json({ success: false, message: 'Blog title is required.' }); // Return error message
    // }
    // if (!req.body.body) {
    //     res.json({ success: false, message: 'Blog body is required.' }); // Return error message
    // }
    // if (!req.body.createdBy) {
    //     res.json({ success: false, message: 'Blog creator is required.' }); // Return error
    // }
    const question = new Question(req.body);
    question.a = question.choices[0]
    question.save((err) => {
        // Check if error

        if (err) {
            return res.json({ success: false, message: err }); // Return general error message
        }
        res.json({ success: true, message: 'Question saved!' }); // Return success message
    });

}