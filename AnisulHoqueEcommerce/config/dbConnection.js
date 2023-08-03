const mongoose = require("mongoose");
const { mongoDbDatabase } = require("../secret");
const connectDb = async () => {
  try {
    await mongoose.connect(mongoDbDatabase);
    console.log("Db connected");
  } catch (error) {
    console.log(error);
  }
};
module.exports = connectDb;
