const bodyParser = require("body-parser");
const express = require("express");

const { static } = require("./static");

const addTodo = require("./routes/admin");
const homePage = require("./routes/index");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set("view engine", "ejs");
app.set("views", "views");

static(app);

app.use(addTodo);

app.use(homePage);

app.listen(port, () => console.log("Server is running on port", port));
