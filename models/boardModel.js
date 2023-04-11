const mongoose = require("mongoose");

const schema = mongoose.Schema({
  name: { type: String },
  userId: { type: String, required: true },
  // tasks: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Task",
  // },
});

const boardModel = mongoose.model("Board", schema);

module.exports = boardModel;
