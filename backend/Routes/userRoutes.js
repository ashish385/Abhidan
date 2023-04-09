const express = require('express');
const userRoute = express();

const userContrller = require('../Controller/userController')
userRoute.get('/', userContrller.login)



module.exports = userRoute;