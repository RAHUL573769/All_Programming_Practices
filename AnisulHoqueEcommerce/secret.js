require("dotenv").config();
const serverPort = process.env.PORT || 3002;
const mongoDbDatabase = process.env.MONGODB_URL;
module.exports = { serverPort, mongoDbDatabase };
