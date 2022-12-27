const MyUserModel= require("../models/user1Model")
const jwt= require("jsonwebtoken")
const { get } = require("../routes/route")

const createUser= async function(req,res){
    let data= req.body

    let savedData= await MyUserModel.create(data)

    res.send({status: true, Msg: savedData})
}

const loginUser= async function(req,res){
    let {emailId, password}= req.body

    let savedData= await MyUserModel.findOne({emailId,password})
    if(!savedData){
       return res.send({status: false, Error: "user not present"})
    }

    let token= jwt.sign({userId: savedData._id.toString()},'FunctionVeryUp')
    if(!token){
        res.send({status:false, Error: "enter token"})
    }

    res.send({status: true, Msg: token})
}

const getUser= async function(req,res){
    let data= req.params.userId

    let checkId= await MyUserModel.findById(data)

    res.send({status: true, Msg: checkId})
}

const updateUser= async function(req,res){
    let userId= req.params.userId

    let checkUserId = await MyUserModel.findById(userId)
    if(!checkUserId){
        return res.send({status: false, Error: "userId is not valid"})
    }

    let data= req.body.firstName

    let savedData= await MyUserModel.findOneAndUpdate({_id:userId},{firstName: data},{new: true})
    res.send({status: true, Msg: savedData})
}


const deleteUser= async function(req,res){
    let userId= req.params.userId
    let checkUserId = await MyUserModel.findById(userId)
    if(!checkUserId){
        return res.send({status: false, Error: "userId is not valid"})
    }

    let savedData= await MyUserModel.findOneAndUpdate({_id:userId},{isDeleted: true},{new: true})
    res.send({status:true, Msg: savedData})
}




module.exports.createUser= createUser
module.exports.loginUser= loginUser
module.exports.getUser= getUser
module.exports.updateUser= updateUser
module.exports.deleteUser= deleteUser