var createError = require("http-errors");
const data = require("../data");
const User = require("../models/userModel");
const express = require("express");
const seedUser = async (req, res) => {
  try {
    const userAdded = await User.insertMany(data.users);

    res.send(userAdded);
  } catch (error) {
    console.log(error);
  }
};

const getUser = async (req, res) => {
  try {
    // const userFind = await User.find();
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.params.limit) || 5;
    // console.log(req.query.name);

    const searchQuery = new RegExp(".*" + search + ".*", "i");

    const filter = {
      isAdmin: { $ne: true },
      $or: [{ name: { $regex: searchQuery } }]
    };
    const options = { password: 0 };
    const userFind = await User.find(filter, options)
      .limit(limit)
      .skip((page - 1) * limit);
    const count = await User.find(filter).countDocuments();
    if (!userFind) {
      throw createError(404, "User Not Found");
    }
    res.status(202).json({
      message: "User Found",
      status: "success",
      data: userFind,
      pagination: {
        totalPages: Math.ceil(count / limit)
      },
      currentPage: page,
      previosPage: page - 1 > 0 ? page - 1 : null,
      nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null
    });
  } catch (error) {
    res.status(202).json({
      message: "User Not Found",
      status: "failed",
      data: error
    });
  }
};
module.exports = { seedUser, getUser };
