const mongoose = require("mongoose");

//connect function
const connectToDB = async () => {
  try {
    //connect to mongo
    await mongoose.connect(process.env.MONGO_URL);

    console.log("Connection to DB is successful.");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectToDB;
