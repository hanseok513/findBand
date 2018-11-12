const mongoose = require('mongoose');

const groupSchema = mongoose.Schema({
  members: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true
  }],
  name: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Group", groupSchema);