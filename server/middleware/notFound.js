//not fount middleware
const notFound = (req, res) => {
  res.status(404).json({ msg: "Endpoint does not exist!" });
};

module.exports = notFound;
