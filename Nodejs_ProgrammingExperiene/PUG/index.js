const express = require("express");

const app = express();
app.set("view engine", "pug");
app.set("views", "./views");
app.get("/home", (req, res) => {
  res.render("home", {
    name: "My Home Page",
    user: {
      id: 1
    }
  });
});
app.get("/footer", (req, res) => {
  res.render("footer");
});
app.listen(3000, (req, res) => {
  console.log("Seerver is Running");
});
