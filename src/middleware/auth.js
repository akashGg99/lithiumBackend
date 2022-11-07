

   let headervalidation = function (req,res,next) {
    const token = req.headers["x-auth-token"]
    if (!token){
       return res.send({ status: false, msg: "Token must be present" })}
      next()
    }

let tokenvalidation = function (req,res,next) {
const decodedToken = jwt.verify(token, "SecretCode")
if (!decodedToken){ 
  return res.send({ status: false, msg: "Token is invalid" })}
  next()
}


module.exports.headervalidation  = headervalidation