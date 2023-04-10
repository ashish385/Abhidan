const express = require('express');
const userRoute = express();

const userController = require('../Controller/userController')
userRoute.get('/', userController.login)



module.exports = userRoute;