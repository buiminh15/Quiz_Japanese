const questionController = require('../controllers/question.controller')
const validateToken = require('../middlewares/validateToken');
const router = require('express').Router();

/**
   * @api {post} api/v1/q/ Create Question
   * @apiDescription Create Question
   * @apiVersion 1.0.0
   * @apiName Create Question
   * @apiGroup Question
   *
   *
   * @apiSuccess {Object} Message Register Success
   *
   * @apiError (Bad Request 400)  Bad Request  
   */
   router.post('/', questionController.createQuestion);


   router.get('/users/:id', questionController.getQuestions);
  module.exports = router;