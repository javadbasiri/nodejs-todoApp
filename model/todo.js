const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    minLength: 3,
  },
  completed: {
    type: Boolean,
    required: false,
    default: false,
  },
},{
  collection: 'todo-tasks'
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
