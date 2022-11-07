const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//1.
router.post("/create-user", userController.createUser  )
//2.
router.post("/login-user", userController.loginUser)

//3. The userId is sent by front end
router.get("/users/:userId", userController.getUserData)

router.put("/users/:userId", userController.updateUser)

router.delete("/users/:userId", userController.updateUser)

module.exports = router;