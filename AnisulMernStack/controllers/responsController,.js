// res.status(202).json({
//   message: "User Not Found",
//   status: "failed",
//   data: error
// });
// }

const errorController = (
  res,
  { statusCode = 500, message = "Internal Server Error" }
) => {
  return res.status(statusCode, message).json({
    message: message,
    status: statusCode
  });
};

const successController = (
  res,
  { statusCode, message, status, data, payload }
) => {
  return res.status(statusCode).json({
    message: message,
    status: status,
    data: data,
    payload: payload
  });
};
module.exports = { errorController, successController };
