const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_ROUND = 10;

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre("save", async function(next) {
  try {
    this.password = await bcrypt.hash(this.password, SALT_ROUND);
    return next();
  } catch (err) {
    return next(err);
  }
})

userSchema.methods.comparePassword = async function (candidate) {
  try {
    const isMatched = await bcrypt.compare(candidate, this.password);
    return isMatched;
  } catch(err) {
    return err;
  }
};

module.exports = mongoose.model("User", userSchema);