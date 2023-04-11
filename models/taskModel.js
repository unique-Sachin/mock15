const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: { type: String },
  description: { type: String },
  status: { type: String, enum: ["Todo", "Doing", "Done"], default: "Todo" },
  boardId: { type: String, required: true },
  // subtask: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Subtask",
  // },
});

const taskModel = mongoose.model("Task", schema);

module.exports = taskModel;
