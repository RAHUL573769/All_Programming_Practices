const express = require("express");

const getData = (req, res) => {
  res.send("Hello");
};

const getDynamicData = (req, res) => {
  res.send(`My id is${req.params.id}`);
};

const viewsData = (req, res) => {
  res.render("home", {
    user: {
      name: "Rahul",
      age: 21
    }
  });
  console.log("ho");
};

module.exports = { getData, getDynamicData, viewsData };
