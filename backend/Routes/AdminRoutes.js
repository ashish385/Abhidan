const express = require("express");

var cors = require("cors");

const abhidanRoutes = express();
const bodyParser = require("body-parser");
abhidanRoutes.use(cors());
abhidanRoutes.use(bodyParser.json());

abhidanRoutes.use(express.static("public"));
abhidanRoutes.use("/css", express.static(__dirname + "public/css"));
abhidanRoutes.use("/img", express.static(__dirname + "public/img"));
abhidanRoutes.use("/js", express.static(__dirname + "public/js"));
abhidanRoutes.use("/plugins", express.static(__dirname + "public/plugins"));
abhidanRoutes.set("view engine", "ejs");
abhidanRoutes.set("views", "./View");

const AdminController = require("../Controller/AdminController");
// abhidanRoutes.get("/", AdminController.Home);
abhidanRoutes.get("/", AdminController.login);
abhidanRoutes.post("/login", AdminController.verifiyLogin);
abhidanRoutes.get("/dashboard", AdminController.dashboard);
abhidanRoutes.get("/ngo", AdminController.Ngo);
abhidanRoutes.get("/all-ngo", AdminController.NgoAll);
abhidanRoutes.get("/donor", AdminController.Donor);
abhidanRoutes.get("/donor", AdminController.Donor);

// Ngo Update || Get || Post || Remove
abhidanRoutes.get("/approve-ngo", AdminController.approve_ngo);
abhidanRoutes.get("/remove-ngo", AdminController.ngo_remove);

// approve_ngo

module.exports = abhidanRoutes;
