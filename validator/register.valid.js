const validator = require("validator");
const isEmpty = require("./isEmpty.valid");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  if (!isEmpty(data.username)) {
    data.username = data.username;
  } else {
    data.username = "";
  }
  if (!isEmpty(data.email)) {
    data.email = data.email;
  } else {
    data.email = "";
  }
  if (!isEmpty(data.password)) {
    data.password = data.password;
  } else {
    data.password = "";
  }

  if (!validator.isLength(data.username, { min: 2, max: 40 })) {
    errors.username = "Username is from 2 to 40 characters";
  }
  if (validator.isEmpty(data.username)) {
    errors.username = "Username is not empty";
  }

  if (!validator.isEmail(data.email)) {
    // console.log(data.email);
    errors.email = "Invalid email";
  }
  if (validator.isEmpty(data.email)) {
    // console.log(data.email);
    errors.email = "Email is not empty";
  }
  if (!validator.isLength(data.password, { min: 6, max: 128 })) {
    errors.password = "Password is from 2 to 40 characters";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is not empty";
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
