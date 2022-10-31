const mongoose = require('mongoose');

const PublisherSchema = new mongoose.Schema({
        Name:String,
        HeadQuarter:String,
},{timestamps:true})

module.exports = mongoose.model("publisher",PublisherSchema) //publishers in DB

