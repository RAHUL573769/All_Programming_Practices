const express = require("express");
const createError = require("http-errors");
const userRouter = require("./routes/userRouter");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/products", userRouter);
app.use((req, res, next) => {
  next(createError(404, "Router Not Found"));
});
app.get("/", (req, res) => {
  res.status(200).send("Hello From Nodejs");
});

module.exports = app;
