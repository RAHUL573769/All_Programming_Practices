const express = require("express");
const getProducts = require("../controllers/userController");
const router = express.Router();
const isLoggedIn = (req, res, next) => {
  const login = true;
  if (login) {
    req.body.id = 101;
    next();
  }
  console.log("Middle Wre Working", req);
};
router.get("/", isLoggedIn, getProducts);
module.exports = router;
