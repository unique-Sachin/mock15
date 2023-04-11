const userModel = require("../models/userModel");

const userRoutes = require("express").Router();

userRoutes.post("/register", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existBoard = await userModel.findOne({ email, password });
    if (existBoard?.email) {
      res.status(401).send("user already exist");
    } else {
      const newBoard = new userModel({ email, password });
      await newBoard.save();
      res.send(newBoard);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});
userRoutes.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const existBoard = await userModel.findOne({ email, password });
    if (!existBoard?.email) {
      res.status(401).send("user not registered");
    } else {
      res.send(existBoard);
    }
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = userRoutes;
