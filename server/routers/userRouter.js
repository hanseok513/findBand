const express = require('express');
const router = express.Router();
const db = require('../models');

router.get("/", (req, res) => {
  res.send("This will be users route");
})

module.exports = router;