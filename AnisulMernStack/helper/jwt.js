var jwt = require("jsonwebtoken");
const { Error } = require("mongoose");
const { errorController } = require("../controllers/responsController,");

const createJsonWebToken = (payload, secretKey, expiresIn) => {
  if (typeof (payload != "object") || !payload) {
    throw new Error("Payyload must be object or give payload");
  }

  if (typeof (secretKey != "string") || secretKey === "") {
    throw new Error("Secret key must be string or give payload");
  }

  try {
    var token = jwt.sign({ payload }, secretKey, { expiresIn });
    return token;
  } catch (error) {
    errorController(res, {
      statusCode: 500,
      message: "Jwt Authentication Failed"
    });
  }
};
module.exports = { createJsonWebToken };
