const express = require("express");
const { getAllNews } = require("./news_controller");

const router = express.Router();

router.get("/news", getAllNews);

module.exports = router;
