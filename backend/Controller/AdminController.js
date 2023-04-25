const path = require("path");
const ejs = require("ejs");

const login = async (req, res) => {
  try {
    res.render("Pages/Login");
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


module.exports = {
  login,
  verifiyLogin,
  dashboard
};
