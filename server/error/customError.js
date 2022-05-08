//custom error handler
class CustomError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

//createCustomErro function
const createCustomError = (message, status) => {
  //return a newly created custom error
  return new CustomError(message, status);
};

module.exports = {
  CustomError,
  createCustomError,
};
