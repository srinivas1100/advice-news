const express = require("express");

require("dotenv").config();
require("./db/db");

const newsRouter = require("./news/news_router");

const app = express();

app.use("/v1", newsRouter);

module.exports = app;
