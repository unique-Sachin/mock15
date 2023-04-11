const mongoose = require("mongoose");

const connection = async () => {
  try {
    mongoose.connect(process.env.mongoURL);
    console.log(`db connected`);
  } catch (error) {
    console.log(`db error`);
  }
};

module.exports = connection;
