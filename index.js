const app = require("express")();
const cors = require("cors");
const { json } = require("express");
const connection = require("./configs/db");
const boardRoutes = require("./routes/boardRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");
const subtaskRoutes = require("./routes/subtaskRoutes");
require("dotenv").config();
app.use(cors());
app.use(json());

app.get("/", (req, res) => {
  res.send("home");
});
app.use("/", userRoutes);
app.use("/board", boardRoutes);
app.use("/task", taskRoutes);
app.use("/subtask", subtaskRoutes);

app.listen(process.env.PORT, () => {
  connection();
});
