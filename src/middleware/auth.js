
const authenticate = function(req, req, next) {
    //check the token in request header
    //validate this token
    const token = req.headers["x-auth-token"]
    if (!token) return res.send({ status: false, msg: "Token must be present" })
    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    const decodedToken = jwt.verify(token, "SecretCode")
    if (!decodedToken) return res.send({ status: false, msg: "Token is invalid" })

    const userId = req.params.userId
    //Authorization
    const userLoggedIn = decodedToken.user
    if (userLoggedIn != userId) return res.send({ status: false, msg: "User loggedIn is not allowed to update details" })
    next()
}

module.exports.authenticate = authenticate
module.exports.authorise = authorise






























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