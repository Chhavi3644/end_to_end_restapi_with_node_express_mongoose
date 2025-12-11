require("dotenv").config();
const mongoose = require("mongoose");

const connectDb = () => {
  console.log("Connecting to MongoDB...");
  return mongoose.connect(process.env.MONGODB_URL);
};

module.exports = connectDb;
