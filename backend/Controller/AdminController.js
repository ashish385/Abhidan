const path = require("path")
const ejs = require('ejs')
 
const login = async (req, res) => {
    try {
      res.render("Pages/Login");
    } catch (error) {
      console.log(error.message);
    }
  };
  
  module.exports = {
    login,
  };