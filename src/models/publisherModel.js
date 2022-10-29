const mongoose = require('mongoose');

const newAuthorSchema = new mongoose.Schema( {
    
   name: String,
   headQuarter: String

}, { timestamps: true });

module.exports = mongoose.model('newAuthor', authorSchema)  //newauthors in DB
