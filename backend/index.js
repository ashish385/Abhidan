const express = require("express");
const db = require("./db");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const apiRouter = require("./Routes/apiRoute");
const abhidanRoutes = require("./Routes/AdminRoutes");

const { createServer } = require("http");
const { Server } = require("socket.io");
const httpServer = createServer(app);

// create a socket.io instance and allow cors
const io = new Server(httpServer, {
  cors: { origin: ["http://localhost:3000"] },
});


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


io.on("connection", (socket) => {
  console.log("client connected");

  socket.on("sendmsg", (data) => {
    console.log(data);

    data.sent = false;
    socket.broadcast.emit("recmsg", data);
  });
});


const port = 1300;
httpServer.listen(port, console.log(`Server started on port no ${port}`));
