const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const productController= require("../controllers/productController")
const orderController= require("../controllers/orderController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//1.create user
router.post("/create-user", UserController.createUser1)

//2. create product
router.post("/create-product", commonMW.validation1, productController.createProduct1)

//3. create order
router.post("/create-order",commonMW.validation1, orderController.createOrder1)












module.exports = router;

// //Can we set the 'next' input parameter in a route handler?
// //What is the primary difference between a middleware and a route handler?
// router.post("/createBook", commonMW.myMiddleware,BookController.createBook, function(req, res, next){
//     res.send("Ending the cycle")
// }  )

// router.post("/createUser", commonMW.myMiddleware, UserController.createUser)

// router.get("/dummy1", commonMW.myOtherMiddleware, UserController.dummyOne)

// router.get("/dummy2", commonMW.myOtherMiddleware, UserController.dummyTwo)

// router.get("/basicRoute", commonMW.mid1, commonMW.mid2, commonMW.mid3, commonMW.mid4, UserController.basicCode)

