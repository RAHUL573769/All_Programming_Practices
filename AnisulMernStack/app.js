const express = require("express");
const createError = require("http-errors");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  next(createError(404, "Router Not Found"));
});

const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 101;
    next();
  }
  console.log("Middle Wre Working", req);
};
app.get("/", (req, res) => {
  res.status(200).send("Hello From Nodejs");
});

app.get("/products", isLoggedIn, (req, res) => {
  res.send("Products are Returned");
});
module.exports = app;
