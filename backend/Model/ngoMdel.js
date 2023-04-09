
const mongoose = require("../db");
// const mongoose = require('mongoose');

const NgoData = new mongoose.Schema({
  ngoname: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  register_id: {
    type: String,
    required: true,
  },
    user_type: {
    type: Number,
    default:2
  },
  status: {
    type: Number,
    default:1
    },
  contact: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  established_date: {
    type: String,
    required: true,
    created: { type: Date, default: new Date() },
  },
});

const ngo = new mongoose.model("ngo", NgoData);

module.exports = ngo;
