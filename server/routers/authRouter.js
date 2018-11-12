const express = require("express");
const router = express.Router();

const { handleSignup, handleLogin } = require("../handlers/authHandler");

router.get("/", (req, res) => {
  res.send("This will be Auth route");
});

router.post("/signup", handleSignup);
router.post("/login", handleLogin);

module.exports = router;
