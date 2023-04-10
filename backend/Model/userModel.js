// const mongoose = require("mongoose");

const mongoose = require('../db');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required:true
  },
  phonenumber: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required:true
  },
  password: {
    type: String,
    required:true,
  },
  salt_password: {
    type: String,
    required:true,
  },
  user_type: {
    type: String,
    requied:true,
  },
  is_active: {
    type: Number,
    default: 1
  }
});



const user = mongoose.model("user", userSchema);
module.exports = user;
