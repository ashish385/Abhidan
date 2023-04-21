const express =require("express");
const Router=express();
const ngoModel =require("../Model/ngoModel")

//  find all Ngos Data
// const NgoAllData = async (req, res) => {
//     try {
//         const data = await ngoModel.find();
//         res.status(201).json(data);
//         console.log(data);
//     } catch (error) {
//         res.status(422).json(error);
//     } 
// }

// Find individual ngo data
// const NgoLogin = async(req, res) =>{
//     try {
//         console.log(req.params);
//         const { id } = req.params

//         const ngoData = await ngoModel.findById({ _id: id });
//         res.status(201).json(ngoData);
//         console.log(ngoData);
//     } catch (error) {
//         res.status(422).json(error);
//     }
// }

// Register ngo data

// const NgoRegister = async (req, res) => {
    
//     try {
//        console.log(req.params);
//     const { ngoname, photo, register_no, contact, address, established_date } = req.params;
//      const addNgo = new ngoModel({
//         ngoname, photo, register_no, contact, address, established_date 
//      })
    
//        await addNgo.save();
//        res.status(201).json(addNgo);
//         console.log(addNgo);
//    } catch (error) {
//     res.status(422).json(error);
//    }
// }

// update ngo
// const UpdateNgo = async (req, res) => {
//     console.log(req.params);
//     try {
//         const { id } = req.params
//         const updateNgo = await ngoModel.findByIdAndUpdate(id, req.body, {
//             new: true
//         });
//         console.log(updateNgo);
//         res.status(201).json(updateNgo);
//         console.log(updateNgo);
//     } catch (error) {
//         res.status(422).json(error); 
//     }
// }


// delete Ngo
// const DeleteNgo = async (req,res) => {
//     console.log(req.params);
//     try {
//         const { id } = req.params;
//         const deleteNgo = await ngoModel.findByIdAndDelete({ _id: id });
//         res.status(201).json(deleteNgo);
//         console.log(deleteNgo);
//     } catch (error) {
//         res.status(422).json(error); 
//     }
// }

// module.exports = {
//     NgoAllData,
//     NgoLogin,
//     NgoRegister,
//     UpdateNgo,
//     DeleteNgo
// }



// this is ngo registration ngocontroller for handle the data whiach comes from user ngo
const RegisterNgo = async(req,res)=>{
    const{name,image,register_id,contact,address,established_date,description,password,email,state}=req.body

    try{
        const ngo = new ngoModel({
            Organisation_name,image,register_id,contact,address,established_date,description,password,email,state
        })
        await ngo.save();
        res.status(201).json({message:"Ngo registerd successfully!"});
    }
    catch(error){
        console.log(error)
        res.status(500).json({message:"Server error"})
    }
}


module.exports = {RegisterNgo};




