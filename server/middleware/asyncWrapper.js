//async wrapper
const asynWrapper = (fn) => {
  //return a express handler
  return async (req, res, next) => {
    try {
      //call the callback function
      await fn(req, res, next);
    } catch (err) {
      //go to error handler middleware
      next(err);
    }
  };
};

module.exports = asynWrapper;
