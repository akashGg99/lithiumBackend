const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    userId:{type:mongoose.Schema.Types.ObjectId},

    productId:{type:mongoose.Schema.Types.ObjectId},
    
    amount: Number,
    isFreeAppUser: Boolean,
    date: String   
}, 
{ timestamps: true });

module.exports = mongoose.model('order', userSchema) //orders in DB


