const { Console } = require('console');
const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    res.send('My second ever api!')
});

router.get('/students', function (req, res){
    console.log("The path params in the request are : ", req.params)
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})


// Example 1 for path params
router.get('/students/:studentName', function(req, res){
    // ':' denotes that the following part of route is a variable
    // The value of this variable is what we are sending in the request url after /students
    // This value is set in the form of an object inside req.params
    // The object contain key value pairs
    // key is the variable in the route
    // value is whatever dynamic value sent in the request url
    let myParams = req.params

    // params attribute is fixed in a request object
    // params contains the path parameters object
    console.log("The path params in the request are : ", myParams)
    res.send('The full name is ' + myParams.studentName )
})

// Example 2 for path params
router.get('/student-details/:name', function(req, res){
    let requestParams = req.params
    console.log("This is the request ", requestParams)
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    res.send('Dummy response nahi. Baat ye hai ki url me aapko dena hai input naam ka jo run karte hi console hojayega (agar aapne console likha ho) as object key:value (value jo input diya hai url me : ke baad,key aapka var name hai) pair as by default name req.params. yah ek obj hai jo ban jata hai aur print ho jata hai.')
})


//Humari pehle Api banana shuru kiya jaaye yaha se....  OUR FIRST EVER API BUILD.....


//Problem 1
router.get('/movies', function(req,res){
    let ArrMovies = ["Border", "Suryavansham", "Bahubali", "Gadar"];
    console.log=(ArrMovies);       //console on terminal after res is printed .
    res.send(ArrMovies)             // Response Appears on the clients display
})

//Problem 2
router.get('/movies/:indexNumber', function(req,res){
    let ArrMovies = ["Border", "Suryavansham", "Bahubali", "Gadar"];
    const index = req.params.indexNumber      //value gets stored by default in OBJ req.params thus . to get the value
    res.send(ArrMovies[index])                // Response Appears on the clients display
})



//Problem 3
router.get('/moviesfrom/:indexNumber', function(req,res) {
    let ArrMovies = ["Border", "Suryavansham", "Bahubali", "Gadar"];
    const index = req.params.indexNumber

    if (index>= ArrMovies.length){
        res.send("use a valid index")
    }else{
        res.send(ArrMovies[index])
    }
})


//Problem 4
router.get('/films', function(req,res){
    let ArrMovies = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }]

    
    res.send(ArrMovies)             // Response Appears on the clients display
})



//Problem 5......
router.get('/films/:filmid', function (req, res){
    let ArrMovies = [ {
        id: 1,
        name: "The Shining"
       }, {
        id: 2,
        name: "Incendies"
       }, {
        id: 3,
        name: "Rang de Basanti"
       }, {
        id: 4,
        name: "Finding Nemo"
       }];

       
       //Using If else
        for(let i=0;i<ArrMovies.length;i++){
            
             if(ArrMovies[i].id == req.params.filmid){
                
                res.send(ArrMovies[i])
              }
              else{
                res.send("Movie does not exixt.")
              }
            } 
           






    //    //Using find
    //    const inputID = req.params.filmid
    //   const found = ArrMovies.find(ArrMovies.id =>inputID == ArrMovies[inputID].id)
    //   if(found){
    //     res.send(found)
    //   }else{
    //     res.send("No such movie exists.")
    //   }




        //// With map
        // ArrMovies.map((elem,index) => {
        //     if(index==req.params.filmid){
        //         res.send(elem)
        //     }
        //     else{
        //         res.send("Movie does not exist")
        //     }
        // });



        // //others code
        // // let count = 0
        // for(let i=0;i<ArrMovies.length;i++){
        //      if(ArrMovies[i].id == req.params.filmid){
        //         // count++
        //         res.send(ArrMovies[i])
        //       }
        //       else{"Movie does not exixt."}
        //     } 
        //     //  }
        //     //      if(count==0)
        //     //  res.send("id is not match")

});






module.exports = router;