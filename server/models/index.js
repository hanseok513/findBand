const mongoose = require("mongoose");

const { MONGO_URI: mongoURI } = process.env;
mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch(e => {
    console.log(e);
  });
  
mongoose.Promise = Promise;

module.exports.User = require("./User");
module.exports.Group = require("./Group");
