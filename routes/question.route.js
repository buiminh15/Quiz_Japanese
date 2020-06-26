const questionController = require('../controllers/question.controller')
const validateToken = require('../middlewares/validateToken');
const router = require('express').Router();

/**
   * @api {post} api/v1/users/register Create User
   * @apiDescription Create User
   * @apiVersion 1.0.0
   * @apiName Register
   * @apiGroup Authen-Autho
   *
   *
   * @apiSuccess {Object} Message Register Success
   *
   * @apiError (Bad Request 400)  Bad Request  
   */
   router.post('/', questionController.createQuestion);

// /**
//    * @api {post} api/v1/users/login Login
//    * @apiDescription Login
//    * @apiVersion 1.0.0
//    * @apiName Login
//    * @apiGroup Authen-Autho
//    *
//    *
//    * @apiSuccess {Object} Message Login Success - Token
//    *
//    * @apiError (Bad Request 400)  Bad Request  
//    */
//   router.post('/login',  authController.login);

//   /**
//    * @api {post} api/v1/users/confirm Confirm
//    * @apiDescription Confirm
//    * @apiVersion 1.0.0
//    * @apiName confirmUser
//    * @apiGroup Authen-Autho
//    *
//    *
//    * @apiSuccess {Object} Message Login Success - Token
//    *
//    * @apiError (Bad Request 400)  Bad Request  
//    */
//   router.post('/confirm',  authController.confirmUser);

//   /**
//    * @api {get} api/v1/users/uncheck Get All Unverified Users
//    * @apiDescription Get All Unverified Users
//    * @apiVersion 1.0.0
//    * @apiName getUnverifiedUsers
//    * @apiGroup Authen-Autho
//    *
//    *
//    * @apiSuccess {Object} Message Login Success - Token
//    *
//    * @apiError (Bad Request 400)  Bad Request  
//    */
//   router.get('/uncheck',  authController.getUnverifiedUsers);

//    /**
//    * @api {post} api/v1/users/reject Delete user
//    * @apiDescription Delete user
//    * @apiVersion 1.0.0
//    * @apiName rejectUser
//    * @apiGroup Authen-Autho
//    *
//    *
//    * @apiSuccess {Object} Message Login Success - Token
//    *
//    * @apiError (Bad Request 400)  Bad Request  
//    */
//   router.post('/reject',  authController.rejectUser);

  module.exports = router;