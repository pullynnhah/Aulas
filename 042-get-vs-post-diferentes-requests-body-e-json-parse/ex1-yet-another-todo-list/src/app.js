import express from "express";

const app = express();
app.use(express.json());

const port = 5000;
const tasks = [];

app.post("/tasks", (req, res) => {
  const task = req.body;
  tasks.push(task);
  res.send(task);
});

app.get("/tasks", (req, res) => {
  res.send(tasks);
});

app.listen(port);
