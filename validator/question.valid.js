const validator = require("validator");
const isEmpty = require("./isEmpty.valid");

module.exports = function validateQuestionInput(data) {
  let errors = {};

  if (!isEmpty(data.creator)) {
    data.creator = data.creator;
  } else {
    data.creator = "";
  }

  if (!isEmpty(data.quiz[0])) {
    data.quiz[0] = data.quiz[0];
  } else {
    data.quiz[0] = "";
  }

  if (!isEmpty(data.quiz.level)) {
    data.quiz[0].level = data.quiz[0].level;
  } else {
    data.quiz[0].level = "";
  }
  if (!isEmpty(data.quiz[0].question)) {
    data.quiz[0].question = data.quiz[0].question;
  } else {
    data.quiz[0].question = "";
  }
  if (!isEmpty(data.quiz[0].choices)) {
    data.quiz[0].choices = data.quiz[0].choices;
  } else {
    data.quiz[0].choices = [];
  }
  if (!isEmpty(data.quiz[0].category)) {
    data.quiz[0].category = data.quiz[0].category;
  } else {
    data.quiz[0].category = "";
  }

  if (!isEmpty(data.quiz[0].translate)) {
    data.quiz[0].translate = data.quiz[0].translate;
  } else {
    data.quiz[0].translate = {};
  }

  if (validator.isEmpty(data.quiz[0].level)) {
    errors.level = "level is not empty";
  }
  if (validator.isEmpty(data.quiz[0].question)) {
    errors.question = "question is not empty";
  }
  if (data.quiz[0].choices.length === 0) {
    errors.choices = "choices is not empty";
  }
  if (validator.isEmpty(data.quiz[0].category)) {
    errors.category = "category is not empty";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
