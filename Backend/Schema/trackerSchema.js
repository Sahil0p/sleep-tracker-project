const {Schema}=require('mongoose');
const mongoose=require('mongoose');

const trackerSchema=new Schema({
    sleepStart:String,
    sleepEnd:String,
})

const sleep=mongoose.model('sleep',trackerSchema);
module.exports=sleep;