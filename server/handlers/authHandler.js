const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require("../models");

exports.handleSignup = async (req, res, next) => {
  try {
    const createdUser = await db.User.create(req.body);
    return res.send(createdUser);
  } catch(err) {
    if (err.code === 11000) {
      err.code = 400;
      err.message = "That user is already registered";
    }
    return next(err);
  }
}

exports.handleLogin = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = await db.User.findOne({email});
    if (!user) {
      const error = new Error("Email address may be wrong, try again");
      return next(error);
    }
    const isMatched = await user.comparePassword(password);
    if(isMatched) {
      const token = jwt.sign({email, password}, process.env.SECRET);
      return res.send({user, token});
    } else {
      return res.send("Not Matched!!");
    }
  } catch (err) {
    return next(err);
  }
} 