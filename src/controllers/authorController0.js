const AuthorModel0 = require("../models/authorModel0")
const bookModel0 = require("../models/bookModel0")

const createAuthor = async function(req,res){
    let data = req.body
    let savedData = await AuthorModel0.create(data)
    res.send({msg : savedData})
}

const find0 =async function(req,res){
    let data = await AuthorModel0.find({author_name : "Chetan Bhagat"}).select({author_id :1 , _id :0})
    let a = data[0].author_id
    console.log(data);
    console.log(a)

    let v = await bookModel0.find({author_id :a })
    res.send({v})
}

const find1 = async function(req,res){
    let data = await bookModel0.findOneAndUpdate({name :"Two States"},{$set :{price:100}},{new:true})//.select({author_id:1 ,_id:0})
    console.log(data)
    let n = data.author_id
    console.log(n);
    let b = await AuthorModel0.find({author_id :n })
   return res.send({b , data})
//    return res.send({data})

}

const find2 = async function(req,res){
    let data = await bookModel0.find({price :{$gte:50},price:{$lte:100}})
    // console.log(data)

    
    let r = data.map(x => x.author_id)
    let q = await AuthorModel0.find({author_id:r})
    // console.log(r)
    // res.send({q})

    // let c = await AuthorModel0.
     
    res.send({data ,q})
}



// // const find0 = async function(req,res){
// //     let data =await AuthorModel0.findOne({author_name:"Chetan Bhagat"}).select({author_id :1, _id:0})
// //     console.log(data)
// //     let a = data.author_id

// //    const b= await bookModel0.findOneAndUpdate({author_id:75},{$set:{price:50}},{new :true,upsert:true})
// //     //console.log(aata)
// //     res.send({b})
// // }

// const set0 = async function(req,res){
//     let d = await bookModel0.deleteOne({isDeleted:true})
//     res.send({d})
// }



module.exports.createAuthor=createAuthor
module.exports.find0=find0
module.exports.find1=find1
module.exports.find2=find2

// module.exports.set0=set0