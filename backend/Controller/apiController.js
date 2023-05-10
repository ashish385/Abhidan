const express = require("express");
const Router = express();
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const NGOModal = require("../Model/ngoModel")

const userModel = require("../Model/userModel")

const JWT_SECRET =
    "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";
  

// To find particular user data
const userData = async (req, res) => {
    const {token}  = req.body;
    console.log("comingdata",token);
    try {
        const user = jwt.verify(token, JWT_SECRET, (err, res) => {
            // console.log(user);
            if (err) {
                return "token expired";
            }
            return res;
        });
        console.log(user);

        if (user === "token expired") {
            return res.send({ status: "error", data: "token expired" });
        }
        
        const usermail = await user.email;
        userModel.findOne({ email: usermail })
            .then((data) => {
            res.send({status:"ok",data:data})
        })

    } catch (error) {
        console.log(error);
    }
}


//user login

const user_donar_login= async(req,res)=>{
    try {
        const email = req.body.email.toLowerCase();
        const type = req.body.user_type;
        const password = req.body.password;
        if (!email || !password) {
            console.log("data not matched");
            return res.status(400).json({
                status: 400,
                error: "field are empty"
            })
        }
        
        const donarData = await userModel.findOne({ email: email });
        

        if (!donarData) {
            return res.status(404).json({
                status: 404,
                error: "user not found"
            })
        }

        if (await bcrypt.compare(password, donarData.password)) {
            const token = jwt.sign({ email: donarData.email }, JWT_SECRET);
            if (res.status(201)) {
                return res.status(201).json({
                    status: 201,
                    message: "login successfully",
                    data: token
                })
            } else {
                return res.status(401).json({
                    status: 401,
                    message: 'Invalid email or password'
                });
            }
        }
    }
    catch(error){
        res.send(500).json({
            status: 500,
            message: 'Server Error'
        });
    };

}


const RegisterUser = async (req, res) => {
    const { username, phonenumber, email, password, salt_password, user_type } = req.body
    console.log(res.body);
    const bcryptedPassword = await bcrypt.hash(password, 10);
   try {
        if (!username || !email || !phonenumber || !password || !salt_password || !user_type) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
        const preuser = await userModel.findOne({email:email});
        console.log(preuser);

        if(preuser){
            res.status(422).json({
                status: 422,
                message:"this is user is already present"
            });
            console.log("presuser hai",preuser);
        }else{
            const adduser = new userModel({
                username,
                phonenumber,
                email,
                password:bcryptedPassword,
                salt_password,
                user_type
            });

            await adduser.save();
            res.status(201).json({
                status: 201,
                message: "Registation Successfull!"
            });
            console.log(adduser);
        }

    } catch (error) {
        res.status(500).json(error);
    }
}

const allNgo = async (req, res) => {
    try {
        const ngoData = await NGOModal.find({ current_status: "2" });
        if (ngoData) {
            res.status(200).send({ data: ngoData });
        }
    } catch (error) {
         res.status(500).json(error);
    }
}

module.exports = {RegisterUser,user_donar_login, userData, allNgo}

