const mongoose = require('mongoose');

const mongoURL = process.env.MONGO_URL;

const connections = mongoose.connect(mongoURL);

module.exports = connections;