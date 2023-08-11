const express = require("express");
const { seedUser } = require("../controllers/seedControoler");

const seedRouter = express.Router();

seedRouter.get("/", seedUser);
module.exports = seedRouter;
