const express = require("express");
const { getAllNews, createNews } = require("./news_controller");

const router = express.Router();

router.get("/news", getAllNews);
router.post("/news", createNews);

module.exports = router;
