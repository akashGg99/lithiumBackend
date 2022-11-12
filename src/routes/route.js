const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController= require("../controllers/weatherController")
const memeController= require("../controllers/memeController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//1.
router.get("/getByDist&Date", CowinController.getByDistrictandDate)


//2.
//gets any city weather by query param
router.get("/getAnyCityTemp", weatherController.getCityWeather)

//to sort and store, same thing but post request to store data in db and sort
router.post("/CityTemp", weatherController.getCityWeather)




//3.
router.get('/getMemelist',memeController.memeList)
router.post('/createMeme',memeController.createMeme)

















//......Other Api examples..................
router.get("/cowin/states", CowinController.getStates)

router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)

router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;