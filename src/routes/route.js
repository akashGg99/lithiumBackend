const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middleware= require("../middleware/auth.js")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//1.
router.post("/create-user", userController.createUser )

//2.
router.post("/login-user", userController.loginUser)

//3. The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

//4
router.put("/users/:userId",middleware.headervalidation, userController.getUserData)

//5
router.delete("/users/:userId",middleware.headervalidation, userController.markAsDelete)




module.exports = router;