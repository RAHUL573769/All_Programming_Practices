const express = require("express");
const {
  seedUser,
  getUser,
  getSpecificUser
} = require("../controllers/seedControoler");

const seedRouter = express.Router();

seedRouter.post("/", seedUser);
seedRouter.get("/", getUser);
seedRouter.get("/:id", getSpecificUser);
module.exports = seedRouter;
