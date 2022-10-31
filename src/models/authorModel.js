const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema( {
    author_name: {type: String, require:true, unique:true},
    age: Number,
    address: String,
    rating: Number

}, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorSchema)  //newauthors in DB
