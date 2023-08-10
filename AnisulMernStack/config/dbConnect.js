const mongoose = require("mongoose");
const { mongoUrl } = require("../secret");

const connectDb = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("Db Connected");
  } catch (error) {
    console.log("Db Not Connected");
  }
};

module.exports = { connectDb };
