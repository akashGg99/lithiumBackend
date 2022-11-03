const OrderModel = require("../models/OrderModel")


const createOrder1= async function (req,res) {
    let data = req.body
    console.log(data)
    let newEntry = await OrderModel.create(data)
    console.log("newentry-----",newEntry)
    res.send({msg: newEntry})
}



module.exports.createOrder1=createOrder1