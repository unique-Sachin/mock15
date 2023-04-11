const subtaskModel = require("../models/subtaskModel");
const subtaskRoutes = require("express").Router();

subtaskRoutes.post("/", async (req, res) => {
  const { title, isCompleted, taskId } = req.body;
  try {
    if (!taskId) {
      res.status(401).send("access denied");
    } else {
      const newBoard = new subtaskModel({ title, isCompleted, taskId });
      await newBoard.save();
      res.send(newBoard);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
subtaskRoutes.post("/", async (req, res) => {
  const { taskId } = req.body;
  try {
    if (!taskId) {
      res.status(401).send("access denied");
    } else {
      const newBoard = await subtaskModel.find({ taskId });
      res.send(newBoard);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = subtaskRoutes;
