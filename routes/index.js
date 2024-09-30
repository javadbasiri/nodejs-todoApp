const express = require("express");

const { getAllData } = require("../controller/index");

const router = express.Router(getAllData);

router.route("/").get(getAllData);

module.exports = router;
