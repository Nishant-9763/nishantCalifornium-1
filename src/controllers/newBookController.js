const NewBookModel =require("../models/newBookModel")
const NewAuthorModel= require("../models/newAuthorModel")
const NewPublisherModel= require("../models/newPublisherModel")





const newBook = async function(req,res){
  let data = req.body
  const{name , author ,price ,rating, publisher}= data
  if(!author){
      res.send("author is required")
  }

  if(!publisher){
    res.send("publisher is required")
  }

  const authorDetails = await NewAuthorModel.findOne({_id : author})
  if(!authorDetails){
    res.send("author is not present")
  }

  const publisherDetails = await NewPublisherModel.findOne({_id : publisher})
  if(!publisher){
    res.send("publisher is not present")
  }

  let savedData = await NewBookModel.create(data)
  res.send({msg : savedData})
}

module.exports.newBook=newBook
// const newBook = async function(req,res){
//     let data = req.body
    // console.log(Author_id)
    // console.log(Author_id[0]._id)
    // console.log(Author_id[1]._id)
    // console.log(yu)
//     for(let i= 0 ; i<Author_id.length;i++){
//     if(yu==(Author_id[i]._id)){
//       return  res.send("done")
//     }else{
//        return res.send("nhi")
//     }
// }
// let x=Object.keys(req.body)  
// // if(!('author' in data)){
// //   res.send({Error :"Please Enter Author  ID"})
// // }
// // let yu = data.author
// //     let Author_id = await NewAuthorModel.find()//.select({_id :1})
// //     console.log(Author_id);
// //     for (let i = 0; i < Author_id.length; i++) {
// //                 if (yu == Author_id[i]._id){
// //                   let save = await NewBookModel.create(data)
// //               return    res.send({msg : save})
// //                 }else{
// //             return      res.send("Please Provide Valide Author Id")
// //                 }
      
    // }
    // if(yu == Author_id)
// if()
//63a2fb3cb9125690e68de490    63a2fb82b9125690e68de492

    // if(Id == Author_id){
    //     let savedData = await NewBookModel.create(data)
    //     res.send({})
    // }
    // // let savedData = await NewBookModel.create(data)
    // console.log(savedData)
    // res.send("hii")
// }

const getBooks= async function(req,res){
  let data = await NewBookModel.find().populate('author').populate('publisher')
  res.send({msg : data})
}



const getTrue = async function(req,res){
  const publishers = await NewPublisherModel.find({name: {$in: ['Penguin','HarperCollins']}})
  // console.log((data));

    const publisherIds = publishers.map(publisher=>publisher._id)
    // console.log(Id);

    const updateData = await NewBookModel.updateMany({publisher :{$in : publisherIds}}, {$set:{isHardCover: true}},{new : true})
    // console.log(saveData);

    res.send({msg : updateData})
}

const  getInc = async function(req,res){
  const data = await NewAuthorModel.find({rating: {$gt:3.5}})
  console.log(data);

  const newData = data.map(x=>x._id)
  console.log(newData);

  const finalData = await NewBookModel.updateMany({author:{$in:newData}},{$inc:{price:10}})
  console.log(finalData);
  
  res.send({Msg : finalData})
}





module.exports.getBooks=getBooks
module.exports.getTrue=getTrue
module.exports.getInc=getInc

