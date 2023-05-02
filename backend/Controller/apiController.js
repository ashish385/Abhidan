const express = require("express");
const Router = express();

const userModel = require("../Model/userModel")


//user login

const user_donar_login= async(req,res)=>{
    try{
        const email=req.body.email.toLowerCase();
        const type =req.body.user_type;
        const password =req.body.password;
        const donarData =await userModel.find({email:email});

        if(donarData){
            const passwordMatch = await userModel.find({password:password});
            console.log(passwordMatch);
            if(passwordMatch != ""){
                res.status(201).json({
                    status: 201,
                    message: "login successfully",
                    data: donarData
                });
            }else{
                res.status(422).json({
                    status: 422,
                    message: 'Invalid email or password'
                });
            }
        } else {
            res.status(402).json({
                status: 402,
                message:"user not found"
            })
        }
    }
    catch(error){
        res.send(400).send({message:'data not found'});
    };

}


const RegisterUser = async (req, res) => {
    const { username, phonenumber, email, password, salt_password, user_type } = req.body
    console.log(res.body);
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
                username,phonenumber,email,password,salt_password,user_type
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

module.exports = {RegisterUser,user_donar_login}

