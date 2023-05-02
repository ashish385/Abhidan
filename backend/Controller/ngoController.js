const express =require("express");
const Router=express();
const ngoModel =require("../Model/ngoModel")



// this is ngo login controller for check that user is exist or not
const ngo_login = async (req, res) => {
    try {
        const { register_id, password } = req.body;
        const isNgo = await ngoModel.findOne({ register_id: register_id });

        if (isNgo) {
            const isPassword = await ngoModel.findOne({ password: password });
            console.log(isPassword);
            if (isPassword) {
                res.status(201).json({
                    status:201,
                    message: "ngo exist!"
                })
            } else {
                res.status(401).json({
                    status:401,
                    message: "Invalid Data!"
                })
            }
        }
    } catch (error) {
        res.status(400).json("data not found!");
    }
}


// this is ngo registration ngocontroller for handle the data which comes from user ngo
const RegisterNgo = async(req,res)=>{
    const { ngo_name, image, register_id, contact, address, established_date, description, password, confirm_password, email, state, current_status, user_type } = req.body
    console.log(req.body);

    try {
        if (!ngo_name  || !register_id || !email || !password || !confirm_password || !contact || !address || !image || !established_date || !description   || !state  || !user_type) {
            return res.status(400).json({
                status: 400,
                message:"Please fill all field!"
            })
        }

        const preNgo = await ngoModel.findOne({ register_id: register_id });
        console.log(preNgo);
        if (preNgo) {
            return res.status(422).json({
                status: 422,
                message: "Ngo already exist"
            })
        }
        const ngo = new ngoModel({
            ngo_name,image,register_id,contact,address,established_date,description,password,confirm_password,email,state,current_status,user_type
        })
        await ngo.save();
        res.status(201).json({
            status:201,
            message: "Ngo registerd successfully!"
        });
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Server error!"})
    }

}


//this is ngo login ngo controller api 

const ngoLogin= async(req,res)=>{
    const {register_id,password}= req.body;

   try{
    
    const ngodata = await ngoModel.findOne({register_id})
    if(!ngodata){
       res.status(400).json({error:"Oops! Register_Id is invalid"})
    }
    if(ngodata.password !== password){
        res.status(400).json({error:"Oops! Password is invalid"})
    }
res.status(201).json({message:"Rock! Ngo is login succsessfully"})
   }
   catch(error){
    res.status(500).json({error:"Server Error"})
   }
   
}

module.exports = {RegisterNgo,ngoLogin,ngo_login};




