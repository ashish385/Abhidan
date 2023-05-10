const express = require('express');
const apiRoute = express();
const multer = require("multer");

// const bodyParser = require("body-parser");
// apiRoute.use(bodyParser.json());
// apiRoute.use(bodyParser.urlencoded({ extended: true }))


// const cors = require('cors')
// apiRoute.use(cors());


// image store
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../public/NgoImage"));
    },
    filename: function (req, file, cb) {
      const name = Date.now() + "-" + file.originalname;
      cb(null, name);
    },
  });
  const upload = multer({ storage: storage });

const apiController = require("../Controller/apiController");
const ngoController = require("../Controller/ngoController")

apiRoute.post("/register-user", apiController.RegisterUser);
apiRoute.post("/donor-login", apiController.user_donar_login)
apiRoute.post("/user-data", apiController.userData);
apiRoute.post("/donation", apiController.Donation); 

apiRoute.post("/register-ngo",upload.single("images"), ngoController.RegisterNgo);
apiRoute.post("/ngo-login",ngoController.ngo_login);
apiRoute.get("/all-ngo",apiController.all_ngo);


module.exports = apiRoute;