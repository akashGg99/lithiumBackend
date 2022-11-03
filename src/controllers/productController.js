const ProductModel = require("../models/productModel")


const createProduct1= async function (req,res) {
    let data = req.body
    let newEntry = await ProductModel.create(data)
    res.send({msg: newEntry})
}



module.exports.createProduct1=createProduct1