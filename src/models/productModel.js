const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    name: String,
    category:String,
    price:{type:Number,required:true}   
}, 
{ timestamps: true });

module.exports = mongoose.model('Product', userSchema) //products


