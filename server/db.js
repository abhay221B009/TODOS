const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://abhayrajchauhan976_db_user:0319a9PUqfuOgH51@todos.ubwqf8z.mongodb.net/todos",
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todo", todoSchema);

module.exports = {
  todo,
};
