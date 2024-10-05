const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/todo_db")
  .then(() => console.log("database connected."))
  .catch((e) => console.log(e));
