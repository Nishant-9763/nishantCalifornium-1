const NewPublisherModel = require("../models/newPublisherModel")

const newPublisher = async function(req,res){
    let data = req.body
    let savedData = await NewPublisherModel.create(data)
    res.send({msg : savedData})
}

module.exports.newPublisher= newPublisher