const axios= require('axios')
const cityModel= require("../models/cityweatherModel")

let citiesArr=[]

let getCityWeather=async function(req,res){
    try{
        let cityname=req.query.q
        let option={
            method:"get",
            url:`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6207e944a25ac70fefa688e11a690105`
        }

        let result= await axios(option)
        // console.log(result.data)
        cities.push(result.data.main.temp)
        console.log(citiesArr)
        // let storedata= await cityModel.create(result.data)

        
        res.status(200).send({output:result.data.main.temp}) //gets us to key with temperature within result object.
    }
    catch(err){
        res.status().send({msg:err.message, errorLocation:"Error in weatherController."})
    }
}


module.exports.getCityWeather=getCityWeather