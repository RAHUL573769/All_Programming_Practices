const data = require("../data");
const User = require("../models/userModel");
const express = require("express");
const seedUser = async (req, res) => {
  try {
    const userAdded = await User.insertMany(data.users);

    res.send(userAdded);
    console.log("User Added");
  } catch (error) {
    console.log(error);
  }
};
module.exports = { seedUser };
