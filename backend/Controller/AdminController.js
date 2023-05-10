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
    const ngoData = await ngoModel.find({ current_status: 1 });
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
    const ngoData = await ngoModel.find({ current_status: 2 });
    if (ngoData) {
      res.render("Pages/NgoAll", { data: ngoData });
    }
  } catch (error) {
    console.log(error);
  }
};



// Approve ngo by id
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
    res.redirect("/all-ngo");
  } catch (error) {
    console.log(error.message);
  }
};

// set current_Status=0
const DeletedNgo = async (req,res)=>{
  try {
    const deleteId = req.query.id;
    await ngoModel.findByIdAndUpdate(
      { _id: deleteId },
      {
        $set: { current_status: "0" }
      }
    );
    res.setHeader("Content-Type", "text/html");
    res.redirect("/remove-ngo")
  }
  catch(error){
    console.log(error.message)
  }
}

// CancelNgo ke liye
const RemovedNgo = async (req, res) => {
  try {
    const ngoData = await ngoModel.find({ current_status: 0 });
    if (ngoData) {
      res.render("Pages/CancelNgo", { data: ngoData });
    }
  } catch (error) {
    console.log(error);
  }
}

// get donor
const Donor = async (req, res) => {
  try {
    const donorData = await userModel.find({ current_status: 1 });
    if (donorData) {
      res.render("Pages/Donor", {data:donorData})
    }
  } catch (error) {
    console.log(error);
  }
}

// approve donor
const approveDonor = async (req, res) => {
  console.log(req.query.id);

  try {
    const approveId = req.query.id;
    console.log(approveId);
    await userModel.findByIdAndUpdate(
      { _id: approveId },
      { $set: { current_status: "1" } }
    );
    res.setHeader("Content-Type", "text/html");
    res.redirect("/donor");
  } catch (error) {
    console.log(error.message);
  }
};

// set current_Status=0
const deleteDonor = async (req,res)=>{
  try {
    const deleteId = req.query.id;
    console.log(deleteId);
    await userModel.findByIdAndUpdate(
      { _id: deleteId },
      {
        $set: { current_status: "0" }
      }
    );
    res.setHeader("Content-Type", "text/html");
    res.redirect("/remove-donor")
  }
  catch(error){
    console.log(error.message)
  }
}

// rwemove donor
const removeDonor = async (req, res) => {
  try {
    const ngoData = await userModel.find({ current_status: 0 });
    if (ngoData) {
      res.render("Pages/DeletedDonor", { data: ngoData });
    }
  } catch (error) {
    console.log(error);
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
  DeletedNgo,
  RemovedNgo,
  approveDonor,
  deleteDonor,
  removeDonor
};
//


// const deleteId = req.query.id;
//     console.log(deleteId)
//     await ngoModel.findByIdAndUpdate(
//       {_id: deleteId},
//       {
//         $set:{current_status:'0'}
//       }
//     ) ;
//     res.setHeader("Content-Type","text/html");
//      res.redirect("Pages/CancelNgo");