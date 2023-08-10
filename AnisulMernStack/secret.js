require("dotenv").config();
const mongoUrl = process.env.Mongo_URL;
module.exports = { mongoUrl };
