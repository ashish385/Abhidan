const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  ngo_name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  register_id: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  confirm_password: {
    type: String,
    require: true,
  },
  current_status: {
    type: String,
    require: true,
  },
  user_type: {
    type: String,
    require: true,
  },
  contact: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  established_date: {
    type: Date,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  is_active: {
    type: Number,
    default: 1,
  },
});

const ngoModel = mongoose.model("ngoModel", ngoSchema);
module.exports = ngoModel;
