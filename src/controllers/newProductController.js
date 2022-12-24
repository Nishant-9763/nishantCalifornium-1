const NewProductModel = require("../models/NewProductModel")
// const NewUserModel = require("../models/NewUserModel")

const newProduct =async function(req,res){
        let data = req.body
        
        let savedData = await NewProductModel.create(data)

        res.send({Msg: savedData})
}

module.exports.newProduct=newProduct


// const updatePrice = async function(req,res){
//     let a = req.headers.isfreeappuser
//     let firstCondition = false
//     console.log(a);
//     if(a === true){
//         // let update1 = await NewProductModel.updateMany({price :{$set:0}}) 
//         // console.log(update1);

//         // let set1 = await NewUserModel.updateMany({isFreeAppUser:{$set:true}})
//         // console.log(set1);

//         // res.send({update :update, set1:set1})
//         firstCondition = true
//     //    return res.send("hello")
//       }

//     //   if(a===false){
//     //         let productPrice = await NewProductModel.find().select({price:1,_id:0})
//     //         console.log(productPrice);

//     //         let userBal = await NewUserModel.find().select({balance:1,_id:0})
//     //         console.log(userBal);
//     //         res.send({Data1:productPrice, data2:userBal})



//     //   }
//     // res.send("hii")

//     if(firstCondition){
//          let update1 = await NewProductModel.updateMany({price :70},{$set:{price:0}},{new:true})//.select({price:1,_id:0}) 
//         // for (let i = 0; i < update1.length; i++) {
//             // const element = array[i];

//             let o = await NewProductModel.updateMany({"price": 70}, {"$set":{"price": 0}});
            
        
//         console.log(o);

//         let set1 = await NewUserModel.updateMany({isFreeAppUser:{$set:true}})
//         console.log(set1);

//         return res.send({update :update1, set1:set1})
//     } else{
//                 let productPrice = await NewProductModel.find().select({price:1,_id:0})
//             console.log(productPrice);

//             let userBal = await NewUserModel.find().select({balance:1,_id:0})
//             console.log(userBal);
//            return res.send({Data1:productPrice, data2:userBal})
//     }

// }





// module.exports.updatePrice=updatePrice

// if header is true the product amount is zero and set isfreeAppuser ture in user
//if header is false then check product price and deduct amount from user balance (userbal-productprice) and order amount == product price and