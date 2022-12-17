const userModel = require("../models/userModel")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: data})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const bookShabi =async function(req,res){

    let data = req.body

    let savedData = await UserModel.create(data)

res.send({book :savedData})
}

const dhekhoBook = async function(req,res){

    let allBooks =await UserModel.find()

res.send({Books : allBooks})
}

const partyMeAnneVAle = async function(req,res){
     let data = req.body
     let savedData = await userModel.create(data)
     res.send({details : savedData})
}

const kitnePersonHai = async function(req,res){
    let data = req.body
    let savedData = await userModel.find()
    res.send({details : savedData})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.bookShabi = bookShabi
module.exports.dhekhoBook = dhekhoBook
module.exports.partyMeAnneVAle = partyMeAnneVAle
module.exports.kitnePersonHai = kitnePersonHai