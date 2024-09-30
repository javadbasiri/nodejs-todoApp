const Todo = require("../model/todo");

exports.addTodo = (req, res, next) => {
  const {
    body: { title },
  } = req;

  if (!title) {
    res.status(400).send("title is required!");
  }

  const todo = new Todo({ title });

  todo.save((err) => {
    console.log(err);
  });

  res.redirect("/");
};

exports.deleteTodo = (req, res) => {
  const { query } = req;

  if (query.id) {
    Todo.deleteTodo(query.id);
  }

  res.redirect("/");
};

exports.checkTodo = (req, res) => {
  const { query } = req;

  if (query.id) {
    Todo.checkTodo(query.id);
  }

  res.redirect("/");
};
