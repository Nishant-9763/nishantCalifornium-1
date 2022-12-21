const CardModel = require("../models/cardModel")


const createCard = async function(req,res){
    let data = req.body
    let savedData = await CardModel.create(data)
    res.send({newCard : data})
}

const getCard = async function(req,res){
    let data = await CardModel.find()
    res.send({allCards : data})
}

module.exports.createCard=createCard

module.exports.getCard=getCard