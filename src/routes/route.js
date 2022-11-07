const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const myMid = require('../middleware/auth')

//1
router.post('/register-user', userController.createUser)

//2
router.post('/login-user', userController.loginUser)

//3
router.get('/users/:userId', myMid.authenticate, myMid.authorise ,userController.getUserDetails)

//4
router.put('/users/:userId', myMid.authenticate, myMid.authorise, userController.updateUserDetail)

//5
router.delete('/users/:userId', myMid.authenticate, myMid.authorise, userController.markAsDelete)




module.exports = router;



















//............................... Prev code ................................







// const express = require('express');
// const router = express.Router();
// const userController= require("../controllers/userController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// router.post("/users", userController.createUser)

// router.post("/login", userController.loginUser)

// //The userId is sent by front end
// router.get("/users/:userId", userController.getUserData)
// router.post("/users/:userId/posts", userController.postMessage)

// router.put("/users/:userId", userController.updateUser)
// router.delete('/users/:userId', userController.deleteUser)

// module.exports = router;