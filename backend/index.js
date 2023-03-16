const express = require('express')
const app = express();

const port = 1200;
app.get('/', (req, res) => {
    res.send("hello ramu")})
app.listen(port, (req, res) => {
    console.log("server started");})