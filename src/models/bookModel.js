const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const newBookSchema = new mongoose.Schema( {
    name: String,
    author : {type: ObjectId ,
              ref:""},
    price: Number,
    ratings: Number, 
    publisher: {type: ObjectId,
                ref: ""}


}, { timestamps: true });


module.exports = mongoose.model('newBook', bookSchema)
