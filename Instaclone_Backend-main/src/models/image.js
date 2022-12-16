const mongoose= require('mongoose');
const postimage=new mongoose.Schema({
    name:{type:String},
    imagedata:{ data: Buffer, contentType: String },
    location: {type: String},
    description: String,
    Date: Date,
    like : Number
})

const model = mongoose.model('instaposts',postimage);
module.exports=model;