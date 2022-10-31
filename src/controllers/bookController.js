const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel=require("../models/publisherModel")

//3. Write a POST api that creates a book from the details in the request body. The api takes both the author and publisher from the request body. 
//In this api, you have to write a logic that validates the following 

//a The authorId is present in the request body. If absent send an error message that this detail is required
//b If present, make sure the authorId is a valid ObjectId in the author collection. If not then send an error message that the author is not present.
//c The publisherId is present in the request body. If absent send an error message that this detail is required
//d If present, make sure the publisherId is a valid ObjectId in the publisher collection. If not then send an error message that the publisher is not present.


const createBook= async function (req, res) {
    let book = req.body
    let id1 = req.body.author_Id
    let authorid = await authorModel.find({_id:id1}).select({_id:1})
    let id2 = req.body.publisher
    let publisherid = await publisherModel.find({_id:id2})
    if(!id1){
        res.send("author id is require")
    }else if(authorid.length==0){
     res.send("This Author is not present")
     }else if(!id2){
        res.send("Publisher id is require")
     }else if(publisherid.length==0){
        res.send("This publisher is not present")
     }else{
         let bookCreated = await bookModel.create(book)
     res.send({data: bookCreated})
    }
  
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

//4. Write a GET api that fetches all the books along with their author details (you have to populate for this) as well the publisher details (you have to populate for this) 

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id').populate('Publisher_id')
    res.send({data: specificBook})

}




// 5. Create a new PUT api /books and perform the following two operations
 // (a)- Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

const updatebypublisher = async (req,res)=>{
    let author= await publisherModel.find({$or:[{Name:"Penguin"},{Name:"HarperCollins"}]}).select({_id:1})

    let a = author.map(x=>x._id)

    let updatedbooks = await bookModel.updateMany({$or:[{Publisher_id:a[0]},{Publisher_id:a[1]}]},{$set:{isHardCover:true}},{new:true})


let booksWithTrue = await bookModel.find({isHardCover:true})

res.send({booksWithTrue})
}


//5. b- For the books written by authors having a rating greater than 3.5, update the books price by 10 (For eg if old price for such a book is 50, new will be 60) 

const updatePrice= async function(req,res){

    let authors = await authorModel.find({rating:{$gt:3.5}}).select({_id:1})
    let a = authors.map(x=>x._id)
     let bookdata = await bookModel.updateMany({author_id:a[0]},{$inc:{"price":10}},{new:true})
     let final = await bookModel.find({author_id:a[0]})
    res.send({final})
}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updatebypublisher=updatebypublisher
module.exports.updatePrice=updatePrice