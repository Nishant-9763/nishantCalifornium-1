const NewAuthorModel = require("../models/newAuthorModel")

const newAuthor = async function(req,res){
    let data = req.body
    let savedData = await NewAuthorModel.create(data)
    res.send({msg : savedData})
}

module.exports.newAuthor=newAuthor