const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const bookShabi =async function(req,res){

    let data = req.body

    let savedData = await UserModel.create(data)

res.send({book :data})
}

const dhekhoBook = async function(req,res){

    let allBooks =await UserModel.find()

res.send({Books : allBooks})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.bookShabi = bookShabi
module.exports.dhekhoBook = dhekhoBook