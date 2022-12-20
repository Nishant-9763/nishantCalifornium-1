const BookModel0 =require("../models/bookModel0")

const createBook = async function(req,res){
    let data = req.body
    console.log(data);
    let saved = await BookModel0.create(data)
    res.send({msg : saved})
}

module.exports.createBook=createBook