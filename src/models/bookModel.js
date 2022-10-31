const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author_id: {
        type: ObjectId,
        ref: "newAuthor"
    }, 
    price: Number,
    ratings: Number,
    Publisher_id:{
        type:ObjectId,
        ref:"publisher",
    },
    isHardCover:{
        type:Boolean,
        default:false
    }



}, { timestamps: true });




module.exports = mongoose.model('newBook', bookSchema) //newbooks in DB
