const validator = require("validator");
const isEmpty = require("./isEmpty.valid");

module.exports = function validateQuestionInput(data) {
  let errors = {};

  if (!isEmpty(data.level)) {
    data.level = data.level;
  } else {
    data.level = "";
  }
  if (!isEmpty(data.question)) {
    data.question = data.question;
  } else {
    data.question = "";
  }
  if (!isEmpty(data.choices)) {
    data.choices = data.choices;
  } else {
    data.choices = [];
  }
  if (!isEmpty(data.category)) {
    data.category = data.category;
  } else {
    data.category = "";
  }
  if (!isEmpty(data.creator)) {
    data.creator = data.creator;
  } else {
    data.creator = "";
  }
  if (!isEmpty(data.translate)) {
    data.translate = data.translate;
  } else {
    data.translate = {};
  }

  if (validator.isEmpty(data.level)) {
    errors.level = "level is not empty";
  }
  if (validator.isEmpty(data.question)) {
    errors.question = "question is not empty";
  }
  if (data.choices.length === 0) {
    errors.choices = "choices is not empty";
  }
  if (validator.isEmpty(data.category)) {
    errors.category = "category is not empty";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
