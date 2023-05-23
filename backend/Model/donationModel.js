const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  donor_name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    reqiured: true,
  },
  address:{
    type:String,
    required:true
  },
  uid: {
    type: String,
    required:true
  },
  status: {
    type: Number,
    default:1
  }
});

const donationModel = mongoose.model('donationModel',donationSchema);
module.exports = donationModel;
