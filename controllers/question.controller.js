const Question = require('../models/Question.model')
const validateQuestionInput = require('../validator/question.valid')

exports.createQuestion = (req, res) => {
    const { errors, isValid } = validateQuestionInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const question = new Question(req.body);
    question.answer = question.choices[0]
    question.save((err) => {
        // Check if error
        if (err) {
            errors.message = err
            return res.status(400).json(errors); // Return general error message
        }
        res.json({ success: true, message: 'Question saved!' }); // Return success message
    });

}

exports.getQuestions = async (req, res) => {
    await Question.find({ creator: req.params.id }, (err, questions) => {
        if (err) {
            return res.status(404).json({messege: "User is not found"})
        }
        res.status(200).json({ creator: req.params.id, questions: questions })
    })
}