const express = require('express');
const apiRoute = express();

// const bodyParser = require("body-parser");
// apiRoute.use(bodyParser.json());
// apiRoute.use(bodyParser.urlencoded({ extended: true }))


// const cors = require('cors')
// apiRoute.use(cors());

const apiController = require("../Controller/apiController");
const ngoController = require("../Controller/ngoController")

apiRoute.post("/register-user", apiController.RegisterUser);
apiRoute.post("/donor-login",apiController.user_donar_login)
apiRoute.post("/ngo", ngoController.RegisterNgo);
apiRoute.post("/ngo-login",ngoController.ngo_login);

module.exports = apiRoute;