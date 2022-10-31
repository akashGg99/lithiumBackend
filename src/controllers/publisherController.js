const PublisherModel = require("../models/publisherModel");

//2. Write a POST api that creates a publisher from the details in the request body
const createPublisher = async (req,res)=>{
    let data = req.body
    let createdPublisher = await PublisherModel.create(data);
    res.send({msg:createdPublisher,status:true})
}

module.exports.createPublisher = createPublisher