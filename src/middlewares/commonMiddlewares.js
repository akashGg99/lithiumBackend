
const mid1= function ( req, res, next) {
    req.falana= "hi there. i am adding something new to the req object"
    console.log("Hi I am a middleware named Mid1")
    next()
}

const mid2= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid2")
    next()
}

const mid3= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid3")
    next()
}

const mid4= function ( req, res, next) {
    console.log("Hi I am a middleware named Mid4")
    next()
}

module.exports.mid1= mid1
module.exports.mid2= mid2
module.exports.mid3= mid3
module.exports.mid4= mid4






//  .................. Some more http codes & try catch examples    ...... (comment code below if not in use.)

const authenticate = function(req, res, next) {

    try {
    //check the token in request header
    //validate this token
    const token = req.headers["x-auth-token"]
    console.log(`800808+++`,token)
    if (!token){ return res.status(400).send({ status: false, msg: "Token must be present" })}
    else{
    next()}

    }

    catch(anything){
        res.status(500).send({msg:`Server side error in Middleware described below.`, error : anything.message})
    }
    
}

const authorise = function(req, res, next) {
    try{

    // comapre the logged in user's id and the id in request
    const decodedToken = jwt.verify(token, "SecretCode")
    if (!decodedToken) return res.status(400).send({ status: false, msg: "Token is invalid" })

    const userId = req.params.userId
    //Authorization
    const userLoggedIn = decodedToken.user
    if (userLoggedIn != userId){ return res.status(401).send({ status: false, msg: "User loggedIn is not allowed to update details" })}
    else{
    next()}

}
    catch(anything){
        res.status(500).send({msg:`Server side error in Middleware2 described below.`, error : anything.message})
    }
    
}


module.exports.authenticate = authenticate
module.exports.authorise = authorise