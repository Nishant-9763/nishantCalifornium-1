const jwt= require('jsonwebtoken')


const tk = async function(req,res,next){
let token= req.headers['x-auth-token']
    if(!token){
       return res.send({status: false, Error: 'token is must'})
    }

    let validToken= jwt.verify(token, "FunctionUp",function(err,decoded){
    if(err)
      return  res.send({status: false, Error: "enter valid token"})

      next()
      
    })}

    module.exports.tk=tk