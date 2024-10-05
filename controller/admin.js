const Todo = require("../model/todo");

exports.addTodo = async (req, res, next) => {
  const {
    body: { title },
  } = req;

  if (!title) {
    res.status(400).send("title is required!");
  }

  await Todo.create({ text: title }).catch((e) => console.log("error", e));

  res.redirect("/");
};

exports.deleteTodo = async (req, res) => {
  const { query } = req;

  await Todo.findByIdAndDelete(query.id);

  res.redirect("/");
};

exports.checkTodo = async (req, res) => {
  const { query } = req;

  if (query.id) {
    const todo = await Todo.findById(query.id);
    todo.completed = true;
    todo.save();
  }

  res.redirect("/");
};
