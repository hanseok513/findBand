const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", async (req, res, next) => {
  try {
    const foundUsers = await db.User.find({});
    return res.send(foundUsers);
  } catch (err) {
    return next(err);
  }
})

module.exports = router;