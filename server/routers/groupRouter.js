const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This will be Group route");
})

module.exports = router;