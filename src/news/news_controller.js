const News = require("./news_model");

const getAllNews = async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).send(news);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    getAllNews: getAllNews
}