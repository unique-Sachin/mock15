const mongoose = require("mongoose");

const schema = mongoose.Schema({
  title: { type: String },
  isCompleted: { type: Boolean, default: false },
  taskId: { type: String, required: true },
});

const subtaskModel = mongoose.model("Subtask", schema);

module.exports = subtaskModel;
