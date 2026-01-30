
const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

app.get("/", (req,res)=>{
  res.send("Todo Board API running");
});

mongoose.connect("mongodb://localhost:27017/todoboard")
.then(()=>console.log("DB Connected"))
.catch(err=>console.log(err));

app.listen(5000,()=>console.log("Server started on 5000"));
