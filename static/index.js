const express = require("express");
const path = require('path')

const rootPath = require("../utils/path");

exports.static = (app) => {
  console.log(rootPath);
  app.use(express.static("public"));
  app.use('/bootstrap',
    express.static("node_modules/bootstrap/dist/css")
  );
  app.use("/bootstrapJs",
    express.static("node_modules/bootstrap/dist/js")
  );
};
