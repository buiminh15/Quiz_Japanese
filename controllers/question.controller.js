const Question = require('../models/Question.model')
const validateQuestionInput = require('../validator/question.valid')
const User = require('../models/User.model')
exports.createQuestion = (req, res) => {
    // const { errors, isValid } = validateQuestionInput(req.body);
    // if (!isValid) {
    //     return res.status(400).json(errors);
    // }

    User.findOne({ _id: req.body.creator }, (err, user) => {
        if (err) {
            return res.json({ mesage: "Wrong id" })
        }
        if (user.role !== "admin") {
            return res.status(400).json({ message: "Only admin can access" })
        }
        req.body.quiz[0].answer = req.body.quiz[0].choices[0]
        var query = { creator: req.body.creator }
        var update = { $push: {quiz :req.body.quiz[0] }}
        var options = { upsert: true, new: true, setDefaultsOnInsert: true, runValidators: true  };

        Question.findOneAndUpdate(query, update, options, (err, doc) => {
            if (err) {
                return res.status(400).json({ message: err })
            }
            res.status(200).json({ success: true, message: 'Question saved!' })
        })
    })
}

exports.getQuestions = async (req, res) => {
    await Question.find({ creator: req.params.id }, (err, questions) => {
        if (err) {
            return res.status(404).json({ messege: "User is not found" })
        }
        res.status(200).json({ creator: req.params.id, questions: questions })
    })
}