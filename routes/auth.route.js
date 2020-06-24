const authController = require('../controllers/auth.controller')
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
   router.post('/register', authController.register);

/**
   * @api {post} api/v1/users/login Login
   * @apiDescription Login
   * @apiVersion 1.0.0
   * @apiName Login
   * @apiGroup Authen-Autho
   *
   *
   * @apiSuccess {Object} Message Login Success - Token
   *
   * @apiError (Bad Request 400)  Bad Request  
   */
  router.post('/login',  authController.login);


  module.exports = router;