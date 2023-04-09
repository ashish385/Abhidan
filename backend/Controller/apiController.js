const express = require("express");
const Router = express();

const userModel = require("../Model/userModel")

const RegisterUser = async (req, res) => {
  const {username,phonenumber,email,password,salt_password,user_type} = req.body
   try {
        
        const preuser = await userModel.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json("this is user is already present");
        }else{
            const adduser = new userModel({
                username,phonenumber,email,password,salt_password,user_type
            });

            await adduser.save();
            res.status(201).json(adduser);
            console.log(adduser);
        }

    } catch (error) {
        res.status(422).json(error);
    }
}

module.exports = {RegisterUser}

