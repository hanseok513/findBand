require("dotenv").load();
const jwt = require('jsonwebtoken');

exports.isLoginRequired = function(req, res, next) {
  try {
    const authorField = req.headers.authorization;

    console.log(authorField);
    console.log(req.headers);
    if (!authorField) {
      return next({
        status: 401,
        message: "Bad Token"
      });
    }
  
    const token = authorField.split(" ")[1];

    console.log(token);
  
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (decoded) {
        return next();
      }
      return next({
        status: 401,
        message: "Please Log in first"
      });
    });
  } catch (err) {
    return next(err);
  }
};

exports.isCorrectUser = function(req, res, next, user) {
  const authorField = req.headers.authorization;

  if (!authorField) {
    return next({
      status: 401,
      message: "Bad Token"
    });
  }

  const token = authorField.split(" ")[1];

  jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
    if (decoded && decoded.id === req.params.id) {
      return next();
    }
    return next({
      status: 401,
      message: "Please Log in first"
    });
  });
}
