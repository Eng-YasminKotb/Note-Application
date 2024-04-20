var express=require("express")
var db=require("./Database/connection")
var app=express();


app.listen(3000,()=>{
    console.log("Server Started!")
})




//netstat -ano | findstr :9323
//taskkill /PID 27924 /F