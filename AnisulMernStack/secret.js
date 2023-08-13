require("dotenv").config();
const mongoUrl = process.env.Mongo_URL;

const jwtKey = process.env.JWT_KEY;
module.exports = { mongoUrl, jwtKey };
