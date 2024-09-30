const fs = require("fs");
const path = require("path");

const rootPath = require("../utils/path");

const filePath = path.join(rootPath, "data", "data.json");

class Todo {
  constructor({ title }) {
    this.id = Math.floor(Math.random() * 1000);
    this.title = title;
    this.completed = false;
    this.createdAt = new Date();
  }

  save(cb) {
    fs.readFile(filePath, (err, fileContent) => {
      if (err) return cb(err);

      const todos = JSON.parse(fileContent);

      todos.push(this);

      fs.writeFile(filePath, JSON.stringify(todos), (err) => {
        if (err) cb(err);
      });
    });
  }

  static getAllData(cb) {
    fs.readFile(filePath, (err, content) => {
      if (err) return [];

      const data = JSON.parse(content);

      cb(data);
    });
  }

  static deleteTodo(id) {
    return new Promise((resolve, reject) => {
      try {
        fs.readFile(filePath, (err, content) => {
          if (err) throw Error("...");
          const todos = JSON.parse(content);
          const filtered = todos.filter((t) => t.id != id);

          fs.writeFile(filePath, JSON.stringify(filtered), (err) => {
            if (!err) return resolve(true);
          });
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  static checkTodo(id) {
    return new Promise((resolve, reject) => {
      try {
        fs.readFile(filePath, (err, content) => {
          if (err) throw Error("...");
          const todos = JSON.parse(content);
          const index = todos.findIndex(t => t.id == id)
          todos[index] = {...todos[index], completed: true}

          fs.writeFile(filePath, JSON.stringify(todos), (err) => {
            if (!err) return resolve(true);
          });
        });
      } catch (error) {
        reject(error);
      }
    });
  }
}

module.exports = Todo;
