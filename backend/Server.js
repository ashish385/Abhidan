const express = require("express")
const app =express();
const port=10000;
app.get('/',(req,res)=>{
    res.send("I am started at 10000")
})

app.listen(port,()=>{
    console.log("Server is started at 10000 port ")
})
