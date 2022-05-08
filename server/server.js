const express = require("express");
const cors = require("cors");
const connectToDB = require("./db/database");
const notes = require("./routes/notes");
const notFound = require("./middleware/notFound");
const errorHandlerMiddleware = require("./middleware/errorHandler");
require("dotenv").config();

//app express
const app = express();

//port
const PORT = process.env.PORT || 3000;

//express top level middleware
app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//route
app.use("/api/v1", notes);

//404 handler
app.use(notFound);

//custom Error middleware
app.use(errorHandlerMiddleware);

//listen to port
app.listen(PORT, async () => {
  await connectToDB();
  console.log(`Server is running in port: ${PORT}`);
});
