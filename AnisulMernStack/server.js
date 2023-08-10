const express = require("express");

const app = require("./app");
const { connectDb } = require("./config/dbConnect");
app.listen(3000, () => {
  console.log("Server Running at Port");
  connectDb();
});
