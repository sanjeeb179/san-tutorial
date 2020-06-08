const express=require("express")
const app=express()


app.get("/",(req,res) => res.send("Hello Sanjeeb!"))

app.get("/welcome",(req,res) => res.send("Welcome Sanjeeb!"))

app.listen(8080,(req,res) => console.log("server started"))