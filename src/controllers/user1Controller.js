const MyUserModel= require("../models/user1Model")
const jwt= require("jsonwebtoken")
const { get } = require("../routes/route")

const createUser= async function(req,res){
   try {let data= req.body

    let savedData= await MyUserModel.create(data)

    res.status(201).send({status: true, Msg: savedData})

  }catch(Error){
    console.log({status: false, Msg:Error.message});
}
}

const loginUser= async function(req,res){
   try{ let {emailId, password}= req.body

    let savedData= await MyUserModel.findOne({emailId,password})
    if(!savedData){
       return res.status(401).send({status: false, Error: "user not present"})
    }

    let token= jwt.sign({userId: savedData._id.toString()},'FunctionVeryUp')
    if(!token){
        res.status(401).send({status:false, Error: "enter token"})
    }

    res.status(201).send({status: true, Msg: token})

    }catch(Error){
    console.log({status: false, Msg: Error.message});
}
}

const getUser= async function(req,res){
   try{ let data= req.params.userId

    let checkId= await MyUserModel.findById(data)

    res.status(200).send({status: true, Msg: checkId})

    }catch(Error){
        console.log({status: false, msg:Error.message});
    }
}

const updateUser= async function(req,res){
  try{  let userId= req.params.userId

    let checkUserId = await MyUserModel.findById(userId)
    if(!checkUserId){
        return res.status(401).send({status: false, Error: "userId is not valid"})
    }

    let data= req.body.firstName

    let savedData= await MyUserModel.findOneAndUpdate({_id:userId},{firstName: data},{new: true})
    res.status(201).send({status: true, Msg: savedData})

    }catch(Error){
        console.log({status: false, msg: Error.message});
    }
}


const deleteUser= async function(req,res){
 try{   let userId= req.params.userId
    let checkUserId = await MyUserModel.findById(userId)
    if(!checkUserId){
        return res.status(401).send({status: false, Error: "userId is not valid"})
    }

    let savedData= await MyUserModel.findOneAndUpdate({_id:userId},{isDeleted: true},{new: true})
    res.status(201).send({status:true, Msg: savedData})
}catch(Error){
    console.log({status: false, msg: Error.message});
}
}




module.exports.createUser= createUser
module.exports.loginUser= loginUser
module.exports.getUser= getUser
module.exports.updateUser= updateUser
module.exports.deleteUser= deleteUser