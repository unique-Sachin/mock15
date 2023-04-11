const taskModel = require("../models/taskModel");
const taskRoutes = require("express").Router();

taskRoutes.post("/", async (req, res) => {
  const { title, description, status, boardId } = req.body;
  try {
    if (!boardId) {
      res.status(401).send("access denied");
    } else {
      const newBoard = new taskModel({ title, description, status, boardId });
      await newBoard.save();
      res.send(newBoard);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
taskRoutes.post("/", async (req, res) => {
  const { boardId } = req.body;
  try {
    if (!boardId) {
      res.status(401).send("access denied");
    } else {
      const newBoard = await taskModel.find({ boardId });
      res.send(newBoard);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = taskRoutes;
