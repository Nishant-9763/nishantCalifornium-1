const bookModel = require('../models/bookModel0')

const createBook = async function(req,res){
    let data = req.body
    let savedData = await bookModel.create(data)
    res.send({msg:savedData})
}

const bookList =async function(req,res){
    let someBook = await bookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({someBook})
}

const getRandomBooks = async function(req,res){
    let books = await bookModel.find({totalPages:{$gt:500},stockAvailable :{$eq:true}})
    res.send ({k:books})
}

const getXINRBooks =async function(req,res){
    let sbook =await bookModel.find({"price.indianPrice" :/INR$/})//.count()
    res.send({e:sbook})
}
const getBooksInYear= async function(req,res){
    let ear = req.query.ear
    let h = await bookModel.find({year : ear})//.count()
    res.send({h})
}

const getParticularBooks =async function(req,res){
    let year =req.query.year
    let name = req.query.name
    let g=await bookModel.find({$or : [{year:year},{bookName:name}]})//.count()
    res.send({g})
}



// const getBooksInYear = async function(req,res){
//     let
// }
module.exports.createBook =createBook
module.exports.bookList=bookList
module.exports.getRandomBooks=getRandomBooks
module.exports.getXINRBooks=getXINRBooks
module.exports.getBooksInYear=getBooksInYear
module.exports.getParticularBooks=getParticularBooks

// module.exports.bookList =bookList
// module.exports.bookList =bookList
// module.exports.bookList =bookList
// module.exports.bookList =bookList
