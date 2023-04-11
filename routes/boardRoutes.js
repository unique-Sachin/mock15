const boardModel = require("../models/boardModel");

const boardRoutes = require("express").Router();

boardRoutes.post("/", async (req, res) => {
  const { name, userId } = req.body;
  try {
    if (!userId) {
      res.status(401).send("access denied");
    } else {
      const newBoard = new boardModel({ name, userId });
      await newBoard.save();
      res.send(newBoard);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});
boardRoutes.get("/", async (req, res) => {
  const { userId } = req.body;
  try {
    if (!userId) {
      res.status(401).send("access denied");
    } else {
      const newBoard = await boardModel.find({ userId });
      res.send(newBoard);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = boardRoutes;
