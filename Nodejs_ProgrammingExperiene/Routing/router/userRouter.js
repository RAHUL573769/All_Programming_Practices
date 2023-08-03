const express = require("express");
const {
  getData,
  getDynamicData,
  viewsData
} = require("../controllers/userController");
const app = express();
const router = express.Router();

app.set("view engines", "pug");
app.set("views", "../views");

router.get("/home", viewsData);

router.get("/", getData);
router.get("/:id([0-9,a-z]{4})", getDynamicData);

module.exports = router;
