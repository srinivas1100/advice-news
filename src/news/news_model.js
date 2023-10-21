const mongoose = require("mongoose");

const newsSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
  },
  { timestamps: true }
);

const News = mongoose.model('news', newsSchema);

module.exports = News;