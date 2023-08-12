const express = require("express");
const {
  seedUser,
  getUser,
  getSpecificUser,
  deleteSpecificUser,
  processRegister
} = require("../controllers/seedControoler");

const seedRouter = express.Router();

seedRouter.get("/", getUser);
seedRouter.get("/:id", getSpecificUser);
seedRouter.post("/process-register", processRegister);

seedRouter.post("/", seedUser);
seedRouter.delete("/:id", deleteSpecificUser);
module.exports = seedRouter;
