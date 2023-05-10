const path = require("path");
const ejs = require("ejs");

const ngoModel = require("../Model/ngoModel");
const userModel = require("../Model/userModel");
const { log } = require("console");


// render login page
const login = async (req, res) => {
  try {
    res.render("Pages/Login");
  } catch (error) {
    console.log(error.message);
  }
};

const Home = async (req, res) => {
  try {
    res.render("Pages/Home");
  } catch (error) {
    console.log(error.message);
  }
};

const verifiyLogin = async (req, res) => {
  const adminemail = "admin@gmail.com";
  const adminpassword = "123456";

  try {
    const email = req.body.email;
    const password = req.body.password;
    console.log(email, password);

    if (adminemail === email) {
      if (password === adminpassword) {
        res.redirect("/dashboard");
      } else {
        res.render("pages/login", {
          message: "pages email and password incorrect",
        });
      }
    } else {
      res.render("pages/login", {
        message: "user email and password incorrect",
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const dashboard = async (req, res) => {
  try {
    res.render("Pages/Dasboard");
  } catch (error) {
    console.log(error.message);
  }
};

const Ngo = async (req, res) => {
  try {
    const ngoData = await ngoModel.find({ is_active: 1 });
    console.log(ngoData);
    if (ngoData) {
      res.render("Pages/Ngo", { data: ngoData });
    }
  } catch (error) {
    console.log(error);
  }
};

const NgoAll = async (req, res) => {
  try {
    const ngoData = await ngoModel.find({ is_active: 1 });
    if (ngoData) {
      res.render("Pages/NgoAll", { data: ngoData });
    }
  } catch (error) {
    console.log(error);
  }
};

const Donor = async (req, res) => {
  try {
    const donorData = await userModel.find({ is_active: 1 });
    if (donorData) {
      res.render("Pages/Donor", {data:donorData})
    }
  } catch (error) {
    console.log(error);
  }
}


const approve_ngo = async (req, res) => {
  console.log(req.query.id);

  try {
    const approveId = req.query.id;
    console.log(approveId);
    await ngoModel.findByIdAndUpdate(
      { _id: approveId },
      { $set: { current_status: "2" } }
    );
    res.setHeader("Content-Type", "text/html");
    res.redirect("/NgoAll");
  } catch (error) {
    console.log(error.message);
  }
};

const ngo_remove = async (req,res)=>{
  try{


    const deleteData = await userModel.find({ is_active: 1 });
    if (deleteData) {
      res.render("Pages/Delete", {data:deleteData})
    }
    const deleteId = req.query.id;
    console.log(deleteId)
    await ngoModel.findByIdAndDelete(
      {_id: deleteId},
      {
        $set:{current_status:'0'}
      }
    ) ;
    res.setHeader("Content-Type","text/html");
   
  }
  catch(error){
    console.log(error.message)
  }
}

module.exports = {
  Home,
  login,
  verifiyLogin,
  dashboard,
  Ngo,
  NgoAll,
  Donor,
  approve_ngo,
  ngo_remove
};
