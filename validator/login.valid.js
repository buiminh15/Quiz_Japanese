const validator = require("validator");
const isEmpty = require("./isEmpty.valid");

module.exports = validateLoginInput = (data) => {
  let errors = {};
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
  // // VALIDATE EMAIL
  if (!validator.isEmail(data.email)) {
    // console.log(data.email);
    errors.email = "Invalid email";
  }
  if (validator.isEmpty(data.email)) {
    // console.log(data.email);
    errors.email = "Email is not empty";
  }
  // // END VALIDATE EMAIL

  // // VALIDATE PASSWORD
  if (validator.isEmpty(data.password)) {
    errors.password = "Password is not empty";
  }
  // // END VALIDATE PASSWORD
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
