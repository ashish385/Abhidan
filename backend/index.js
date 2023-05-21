const express = require("express");
const db = require("./db");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const apiRouter = require("./Routes/apiRoute");
const abhidanRoutes = require("./Routes/AdminRoutes");

app.use("/assets", express.static("assets"));
app.set("view engine", "ejs");
app.set("views", "./View");
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "https://abhidan-sewa.onrender.com"],
  })
);

app.use("/", abhidanRoutes);
app.use("/api", apiRouter);

const port = 1300;
app.listen(port, console.log(`Server started on port no ${port}`));
