try{

const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    const token = req.headers["x-auth-token"]
    console.log(`800808+++`,token)
    if (!token) return res.status(400).send({ status: false, msg: "Token must be present" })
    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    const decodedToken = jwt.verify(token, "SecretCode")
    if (!decodedToken) return res.status(400).send({ status: false, msg: "Token is invalid" })

    const userId = req.params.userId
    //Authorization
    const userLoggedIn = decodedToken.user
    if (userLoggedIn != userId) return res.status(401).send({ status: false, msg: "User loggedIn is not allowed to update details" })
    next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise

}



catch(err){
    res.status(500).send({msg:`Server side error described below.`, error : err.message})
}
































//..................  Previous Code ..............................





// const authenticate = function(req, req, next) {
//     //check the token in request header
//     //validate this token

//     next()
// }


// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     next()
// }