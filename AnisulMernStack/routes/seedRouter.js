const express = require("express");
const { seedUser, getUser } = require("../controllers/seedControoler");

const seedRouter = express.Router();

seedRouter.post("/", seedUser);
seedRouter.get("/", getUser);
module.exports = seedRouter;
