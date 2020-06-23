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
    errors.username = "t?n ??ng k? ph?i d?i t? 2 k? t? ??n 40 k? t?";
  }
  if (validator.isEmpty(data.username)) {
    errors.username = "T?n ??ng k? kh?ng ???c b? tr?ng";
  }

  if (!validator.isEmail(data.email)) {
    // console.log(data.email);
    errors.email = "Email kh?ng h?p l?";
  }
  if (validator.isEmpty(data.email)) {
    // console.log(data.email);
    errors.email = "Email ??ng k? kh?ng ???c b? tr?ng";
  }
  if (!validator.isLength(data.password, { min: 6, max: 128 })) {
    errors.password = "Password d?i t? 6 ??n 128 k? t?";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password ??ng k? kh?ng ???c b? tr?ng";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  }
};
