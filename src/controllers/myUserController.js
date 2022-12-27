const jwt= require("jsonwebtoken")
const myUserModel = require("../models/myUserModel")
const MyUserModel= require("../models/myUserModel")

const createuser= async function(req,res){
     let data= req.body
     let savedData= await MyUserModel.create(data)
     res.send({status: true, Msg: savedData})
}

const loginUser= async function(req, res){
    let {emailId, password}= req.body

    let savedData= await MyUserModel.findOne({emailId: emailId, password:password})
    if(!savedData){
        return res.send({status: false, Error: "details not match"})
    }

    let token = jwt.sign({username: savedData._id},'FunctionUp')
    // res.setHeader("x-auth-token",token)
    // console.log(req.headers);
    // pm.req.headers.add({key:'x-auth-token', value: token})
    res.send({status: true, token:token})
    
    // res.send({status: true, Msg: savedData})
}

const getUser= async function(req,res){

    let data= req.params.userId

    let savedData= await myUserModel.findById(data)

   return res.send({satatus: true, Msg: savedData})

}



const updatedUser= async function(req,res){

    let data= req.params.userId

    let data1= req.body

    let savedData= await MyUserModel.findOneAndUpdate({_id: data},data1,{new: true})

    res.send({status: true, Msg: savedData})
}



const deleteUser= async function(req,res){

    let data= req.params.userId

    let savedData= await MyUserModel.updateOne({isDeleted: false})
    
    res.send({status: true, Msg: savedData})
    
}

module.exports.createuser=createuser
module.exports.loginUser=loginUser
module.exports.getUser=getUser
module.exports.updatedUser=updatedUser
module.exports.deleteUser=deleteUser
