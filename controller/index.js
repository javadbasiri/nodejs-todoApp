const Todo = require("../model/todo");

exports.getAllData = (req, res) => {
  Todo.find().then((data) => {
    res.render("index", {
      pageTitle: "To do",
      data: data.filter((t) => !t.completed),
      done: data.filter((t) => t.completed),
    });
  });
};
