const express = require("express")
const app =express();
const port=10000;

app.set('view engine', 'ejs')
app.set('views','View')

const AdminRoutes = require('./Routes/AdminRoutes')

app.use('/',AdminRoutes.abhidanRoutes)

// app.get('/',(req,res)=>{
//     res.send("I am started at 10000")
// })

app.listen(port,()=>{
    console.log("Server is started at 10000 port ")
})
