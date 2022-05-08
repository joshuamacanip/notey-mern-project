const { CustomError } = require("../error/customError");

//errorhandler middleware
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log("error handler is working");

  //check err params if it was a customError instance
  if (err instanceof CustomError) {
    return res.status(err.status).json({ msg: err.message });
  }

  //default response
  res.status(500).json({ msg: "Something went wrong, please try again later" });
};

module.exports = errorHandlerMiddleware;
