const express = require("express");
const Router = express();
const ngoModel = require("../Model/ngoModel");

// for ngo data
const ngoData = async (req, res) => {
  const { register_id } = req.body;
  console.log(register_id);
  try {
    const ngoData = await ngoModel.find({register_id:register_id});
     res.status(201).send({ data: ngoData });
  } catch (error) {
    res.send(error);
  }
};

// this is ngo login controller for check that user is exist or not
const ngo_login = async (req, res) => {
  try {
    const { register_id, password } = req.body;
    if (!register_id || !password) {
      console.log("data not matched");
      return res.status(400).json({
        status: 400,
        message: "Data not matched",
      });
    }
    const isNgo = await ngoModel.findOne({ register_id: register_id });
    console.log(isNgo);

    if (isNgo) {
      const isPassword = await ngoModel.findOne({ password: password });
      console.log(isPassword);
      if (isPassword) {
        res.status(201).send({
          data: isNgo,
          message: "Login Successfully!",
        });
      } else {
        res.status(401).json({
          status: 401,
          message: "Invalid email or password",
        });
      }
    } else {
      res.status(404).json({
        status: 404,
        message: "user not found",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: "Server Error",
    });
  }
};

// this is ngo registration ngocontroller
const RegisterNgo = async (req, res) => {
  const {
    ngo_name,
    image,
    register_id,
    contact,
    address,
    established_date,
    description,
    password,
    confirm_password,
    email,
    state,
    user_type,
  } = req.body;
  console.log(req.body);

  try {
    if (
      !ngo_name ||
      !register_id ||
      !email ||
      !password ||
      !confirm_password ||
      !contact ||
      !address ||
      !established_date ||
      !description ||
      !state ||
      !user_type
    ) {
      console.log("empty data");
      return res.status(400).json({
        status: 400,
        message: "Please fill all field!",
      });
    }

    const preNgo = await ngoModel.findOne({ register_id: register_id });
    console.log(preNgo);
    if (preNgo) {
      return res.status(422).json({
        status: 422,
        message: "Ngo already exist",
      });
    }
    const ngo = new ngoModel({
      ngo_name,
      register_id,
      contact,
      address,
      established_date,
      description,
      password,
      confirm_password,
      email,
      state,
      user_type,
    });
    await ngo.save();
    res.status(201).json({
      status: 201,
      message: "Ngo registerd successfully!",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error!" });
  }
};

module.exports = { RegisterNgo, ngo_login, ngoData };
