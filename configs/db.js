const mongoose = require("mongoose");

const connection = async () => {
  try {
    mongoose.connect(
      "mongodb+srv://sachin:sachin@cluster0.urwi6.mongodb.net/mock15"
    );
    console.log(`db connected`);
  } catch (error) {
    console.log(`db error`);
  }
};

module.exports = connection;
