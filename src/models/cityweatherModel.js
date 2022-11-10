const mongoose=require("mongoose")


let weatherSchema= new mongoose.Schema(
    {
        // city: String,
        // weatherData: Object
    }
)

module.exports=mongoose.model('Cityweather',weatherSchema) //cityweathers in DB 