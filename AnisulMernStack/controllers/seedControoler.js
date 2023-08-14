var createError = require("http-errors");
const data = require("../data");
const User = require("../models/userModel");
const express = require("express");
const { errorController, successController } = require("./responsController,");
const { createJsonWebToken } = require("../helper/jwt");
const { jwtKey, clientUrl } = require("../secret");
const { sendEmailUsingNodemailer } = require("../helper/email");
const seedUser = async (req, res) => {
  try {
    const userAdded = await User.insertMany(data.users);

    res.send(userAdded);
  } catch (error) {
    return errorController(res, {
      status: error.status,
      message: error.message
    });
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

    successController(res, {
      statusCode: 202,
      message: "User Found",
      status: "success",
      data: userFind,
      payload: {
        pagination: {
          totalPages: Math.ceil(count / limit)
        },
        currentPage: page,
        previosPage: page - 1 > 0 ? page - 1 : null,
        nextPage: page + 1 <= Math.ceil(count / limit) ? page + 1 : null
      }
    });
  } catch (error) {
    res.status(202).json({
      message: "User Not Found",
      status: "failed",
      data: error
    });
  }
};

const getSpecificUser = async (req, res) => {
  try {
    const routeParameter = req.params.id;

    const specificUser = await User.findById(routeParameter);
    successController(res, {
      statusCode: 202,
      message: "User Found",
      status: "success",
      data: specificUser,
      payload: {}
    });
  } catch (error) {
    return errorController(res, {
      status: error.status,
      message: "User Not Found"
    });
  }
};
const deleteSpecificUser = async (req, res) => {
  try {
    const deleteParameter = req.params.id;

    const deletedUser = await User.findByIdAndDelete({ _id: deleteParameter });
    successController(res, {
      statusCode: 202,
      message: "User Deleted",
      status: "success",
      data: deletedUser,
      payload: {}
    });
  } catch (error) {
    return errorController(res, {
      status: error.status,
      message: "User Not Found"
    });
  }
};

const processRegister = async (req, res) => {
  try {
    // console.log(req.body);
    const { name, email, address, phone, isAdmin, password } = req.body;

    const newUser = {
      name: name,
      email: email,
      address: address,
      phone: phone,
      isAdmin: isAdmin,
      password: password
    };

    const token = createJsonWebToken(
      { name, email, password, phone, address },
      jwtKey,
      10
    );
    console.log(token);
    const emailData = {
      email,
      subject: "Account ctivtion Email",
      html: `Hello ${name}
      <p>Please Click Here <a href="${clientUrl}/api/user/activate/${token}">Here</a></p>`
    };

    try {
      await sendEmailUsingNodemailer(emailData);
      console.log("Email Devdsg");
    } catch (error) {
      console.log(error);
    }

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      console.log("hi");
      return { messasr: "User Exists" };
    } else {
      console.log("Hello");
      const insertedUser = await User.insertMany(newUser);
      return successController(res, {
        statusCode: 202,
        message: "User Inserted Successfully",
        status: "success",
        data: insertedUser,
        payload: { token }
      });
    }
  } catch (error) {
    console.log(error.message);
    return errorController(res, {
      status: error.status,
      message: "User Not Inserted"
    });
  }
};

module.exports = {
  seedUser,
  getUser,
  getSpecificUser,
  deleteSpecificUser,
  processRegister
};
