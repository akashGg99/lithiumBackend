const OrderModel = require("../models/OrderModel")
const productModel = require("../models/productModel")
const userModel = require("../models/userModel")


const createOrder1= async function (req,res) {
    let data = req.body
    let{userId, productId}= data
    let searchUser= await userModel.findById(userId)
    let searchProd= await productModel.findById(productId)
    console
    // User&Product Validation ----P3
    if(searchUser==userId && searchProd==productId)
        {
        let newEntry = await OrderModel.create(data)
        res.send({msg: newEntry})
        }
    res.send({msg: "Error from order handler User/Product does not exist."})

}



module.exports.createOrder1=createOrder1



//Subh's.............................................................................
const { isValidObjectId, default: mongoose } = require('mongoose')
const orderModel=require('../models/orderModel')
const appUserModel=require('../models/appUserModel')
const productModel = require('../models/productModel')
const moment=require('moment')

const createOrder=async function(req,res){
    data=req.body
    const userStatus=(req.isfreeappuser==='true')?true:false
    if(!isValidObjectId(data.userId)){
        res.send("Invalid user ID")
    }
    else if(!isValidObjectId(data.productId))
    {
        res.send("Invalid Product ID")
    }
    else{
        data.isFreeAppUser=userStatus
        // console.log(userStatus)
        if(userStatus==false){
            const pdtPrice=await productModel.findById(data.productId)
            let userBal=await appUserModel.findById(data.userId)
            userBal=userBal.balance
            if(pdtPrice.price>userBal){
                return res.send("User has insufficient balance!")
            }
            data.amount=pdtPrice.price
            // console.log(typeof pdtPrice.price)
          
        }
        else{
            data.amount=0
            //and user's balance is not deducted
        }

        data.date=moment().format('DD MM YYYY')

        const savedData=await orderModel.create(data)
        res.send({msg:savedData})

    }

}

module.exports={createOrder}