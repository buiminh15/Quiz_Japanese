const authController = require('../controllers/auth.controller')
const validateToken = require('../middlewares/validateToken');
const passport = require('passport');
const router = require('express').Router();


// Register Route
   router.post('/register', authController.register);

// Login
  router.post('/login',  authController.login);


  module.exports = router;