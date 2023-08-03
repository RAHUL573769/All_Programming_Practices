const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const userRouter = require("./router/userRouter");
const { getDynamicData } = require("./controllers/userController");

app.use("/", userRouter);
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "pug");
app.set("views", "./views");

app.use("/dynamic", userRouter);
app.use("/middle", (req, res, next) => {
  res.send("Hnpm iello");
  next();
});

app.get("*", (req, res) => {
  res.send("404 Not Found");
});
app.listen(3000, (req, res) => {
  console.log("Server s Running");
});
