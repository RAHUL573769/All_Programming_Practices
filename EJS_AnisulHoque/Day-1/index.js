const express = require("express");
var bodyParser = require("body-parser");

const app = express();
const port = 3000;
let pLanguagesArray = [];
app.set("view engine", "ejs");
app.set("views", "./views");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.render("index", {
    names: pLanguagesArray
  });
});

app.post("/", (req, res) => {
  const programmingLanguage = req.body.planguage;
  pLanguagesArray.push(programmingLanguage);
  res.redirect("/");
  console.log(programmingLanguage);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
