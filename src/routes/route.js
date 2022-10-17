const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')

//importing external package
const underscore = require('underscore')

const callfromutil = require('../util/helper')              //importing fn from util
const FnfromValidator = require("../validator/formatter")  //importing from validator
const lodash = require("lodash")                          //importing lodash.


router.get('/test-me', function (req, res) {
    
    //Calling the components of a different custom module
    console.log("Calling my function ",xyz.myFunction())
    console.log("The value of the constant is ",xyz.myUrl)

    console.log("------------------------------------------------------------")

        //Assignments Tasks P1.......
    console.log("Problem 1",xyz.welcomeFunction())

        //Problem 2.........
    console.log("Date",callfromutil.printDate())
    console.log("Month",callfromutil.printMonth())
    console.log("",callfromutil.getBatchInfo())


    //Problem 3.........
    console.log("Trim:  ",FnfromValidator.trimmingFunction("    FunctionUp     "))

    console.log("LC :  ",FnfromValidator.changetoLowercase("FunctionUp"))
    console.log("UC :  ",FnfromValidator.changetoUppercase("FunctionUp"))


    //Problem 4.............
    
    //lodash.chunk
    let Months = ['January','February','March','April','May','June','July','August','September','October','November','December']
    let splitMonths = lodash.chunk(Months,3)
    console.log(splitMonths);

    //lodash.tail
    let arrOdd = [1,3,5,7,9,11,13,15,17,19];
    let Tailedarr = lodash.tail(arrOdd)
    console.log(Tailedarr);


    //lodash union
    let array1=[1,6,9,5,4,5]
    let array2=[7,8,5,4,3,4]
    let array3=[9,6,2,1,5,1]
    let array4=[10,6,7,4,6,8]
    let array5=[8,9,4,2,10,7]
    console.log(lodash.union(array1,array2,array3,array4,array5));

    //lodash fromPairs
    let array= [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    console.log(lodash.fromPairs(array));








    //Trying to use an external package called underscore
    let myArray = ['Akash', 'Pritesh', 'Sabiha']
    let result = underscore.first(myArray)
    console.log("The result of underscores examples api is : ", result)
    
    res.send('My first ever api!')


    //To be tried what happens if we send multiple response
    //res.send('My second api!')
    
});

module.exports = router;

