const mongoose=require('mongoose');
const express= require('express');
const bodyParser=require('body-parser')
const sleep = require('./Schema/trackerSchema');
const cors=require('cors');
const app=express();
app.use(cors())
const PORT=80;
mongoose.connect('mongodb://localhost:27017/sleep?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false')
.then((err)=>{
    err??console.log(err);
    console.log("you are connected");
})

app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.send("Home...")
})

app.post('/',async (req,res)=>{
   const newSleep=new sleep({
    sleepStart:req.body.sleepStart,
    sleepEnd:req.body.sleepEnd
   })
   newSleep.save();

   res.send(newSleep)

})

app.listen(PORT,()=>{console.log("server listening...")});