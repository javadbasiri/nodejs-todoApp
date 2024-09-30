const express = require("express");
const router = express.Router();

const { addTodo, deleteTodo, checkTodo } = require("../controller/admin");

router.route("/admin/add-todo").post(addTodo);

router.route("/admin/delete-todo").get(deleteTodo);

router.route("/admin/check-todo").get(checkTodo);

module.exports = router;
