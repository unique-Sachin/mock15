const mongoose = require("mongoose");

const schema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
  // tasks: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Task",
  // },
});

const userModel = mongoose.model("User", schema);

module.exports = userModel;
