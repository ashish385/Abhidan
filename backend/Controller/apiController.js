const express = require("express");
const Router = express();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const ngoModel = require("../Model/ngoModel");
const donationModel=require("../Model/donationModel");
const userModel = require("../Model/userModel");

const JWT_SECRET =
  "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

  // total donation 
const totalDonation = async (req, res) => {
  try {
    const allDonation = await donationModel.find({ status: 1 });
    if (allDonation) {
      return res.status(201).send({data:allDonation})
    }
  } catch (error) {
    res.send(error);
  }
  }

// To find particular user data
const userData = async (req, res) => {
  const  {email} = req.body;
  console.log( email);
  try {
    const userData = await userModel.findOne({ email:email });
    if (userData) {
     return res.status(201).send({ data: userData });
    }
  } catch (error) {
    res.send(error);
  }
};



//Donor login

const user_donar_login = async (req, res) => {
  try {
    const email = req.body.email.toLowerCase();
    const type = req.body.user_type;
    const password = req.body.password;
    if (!email || !password) {
      console.log("data not matched");
      return res.status(400).send({
        error: "field are empty",
      });
    }

    const donarData = await userModel.findOne({ email: email });
    console.log(donarData);

    if (!donarData) {
      return res.status(404).send({
        error: "user not found",
      });
    }

    if (await bcrypt.compare(password, donarData.password)) {
      const token = jwt.sign({ email: donarData.email }, JWT_SECRET);
      if (res.status(201)) {
        return res.status(201).send({
          message: "login successfully",
          data: donarData,
        });
      } else {
        return res.status(401).send({
          message: "Invalid email or password",
        });
      }
    }
  } catch (error) {
    res.send(500).send({
      message: "Server Error",
    });
  }
};


// donor Registation

const RegisterUser = async (req, res) => {
  const { username, phonenumber, email, password, salt_password, user_type } =
    req.body;
  console.log(res.body);
  const bcryptedPassword = await bcrypt.hash(password, 10);
  try {
    if (
      !username ||
      !email ||
      !phonenumber ||
      !password ||
      !salt_password ||
      !user_type
    ) {
      console.log("not all fields...");
      return res.status(400).send({
        message: "Please fill all fields",
      });
    }
    const preuser = await userModel.findOne({ email: email });
    console.log(preuser);

    if (preuser) {
      res.status(422).send({
        message: "this is user is already present",
      });
      console.log("presuser hai", preuser);
    } else {
      const adduser = new userModel({
        username,
        phonenumber,
        email,
        password: bcryptedPassword,
        salt_password,
        user_type,
      });

      await adduser.save();
      res.status(201).send({
        message: "Registation Successfull!",
      });
      console.log(adduser);
    }
  } catch (error) {
    res.status(500).json(error);
  }
};


// get all ngo data
const all_ngo = async (req, res) => {
  try {
    const allngoData = await ngoModel.find({ current_status: 2 });
    console.log(allngoData);

    res.status(200).send({ success: true, data: allngoData });
  } catch (error) {
    console.log(error.message);
  }
};

// donation form controller for donor...
const Donation = async(req,res)=>{
  const {donor_name,email,category,phone,address,uid} = req.body;

  try{
      

      const donation = new donationModel({
          donor_name,email,category,phone,address,uid
      });
      await donation.save();
      res.status(201).send({       
          message:"Submit successfully"
      })
  }
  catch(error){
      res.status(500).json(error)
  }
}



module.exports = { RegisterUser, user_donar_login, userData, all_ngo,Donation, totalDonation };
