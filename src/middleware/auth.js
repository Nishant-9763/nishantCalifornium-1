const jwt= require('jsonwebtoken')

const authenticate = function(req, res, next) {
    //check the token in request header
    //validate this token
    let token= req.headers['x-auth-token']
    // console.log(token);
    if(!token){
        return res.send({status: false, Msg: "token is must"})
    }
    let decodedToken= jwt.verify(token,'FunctionVeryUp')
    if(!decodedToken){
        return res.send({status: false, Error: "token is not valid"})
    }
    req.decodedToken=decodedToken

    next()
}


const authorise = function(req, res, next) {
    // comapre the logged in user's id and the id in request
    // console.log(req.decodedToken);
    let token1= req.decodedToken
    // console.log(token1);
    if (token1.userId !=req.params.userId){
        return res.send({status: false,Msg: "userId not match"  })
    }
    next()
}

module.exports.authenticate=authenticate
module.exports.authorise=authorise