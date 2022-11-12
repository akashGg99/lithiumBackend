const axios= require('axios')



let getCityWeather=async function(req,res){
    try{
        let cityArr=["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let newArr=[]
        for(let i of cityArr){

            let cityname=i
            // let cityname=req.query.q
            let option={
                method:"get",
                url:`http://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=6207e944a25ac70fefa688e11a690105`
            }

            let result= await axios(option)
            // console.log(result.data)


            newArr.push( {city:cityname, temp:result.data.main.temp} )//result.data.main.temp gets us to key with temperature within result object.
        }

        newArr.sort((a,b)=>a.temp-b.temp)  //numeric sorting 
        res.status(200).send({output:newArr}) 
    }
    catch(err){
        res.status(500).send({msg:err.message, errorLocation:"Error in weatherController."})
    }
}


module.exports.getCityWeather=getCityWeather