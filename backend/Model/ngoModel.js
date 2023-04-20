const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  Organisation_name: {
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
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

const ngoModel = mongoose.model("ngoModel",ngoSchema);
module.exports=ngoModel