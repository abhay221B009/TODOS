const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

// Create Todo
app.post("/todo", async function (req, res) {
  const createPayLoad = req.body;
  const parsedPayLoad = createTodo.safeParse(createPayLoad);

  if (!parsedPayLoad.success) {
    return res.status(411).json({ msg: "You sent the wrong inputs" });
  }

  await todo.create({
    title: createPayLoad.title,
    description: createPayLoad.description,
    completed: false,
  });

  res.json({ msg: "Todo created" });
});

// Get Todos
app.get("/todos", async function (req, res) {
  const todos = await todo.find({});
  res.json({ todos });
});

// Mark as completed
app.put("/completed", async function (req, res) {
  const updatePayLoad = req.body;
  const parsedPayLoad = updateTodo.safeParse(updatePayLoad);

  if (!parsedPayLoad.success) {
    return res.status(401).json({ msg: "You sent the wrong inputs" });
  }

  await todo.updateMany({ _id: req.body.id }, { completed: true });

  res.json({ msg: "Todo updated" });
});

app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`);
});
