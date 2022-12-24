const NewOrderModel = require("../models/NewOrderModel")
const NewProductModel= require("../models/NewProductModel")
const NewUserModel = require("../models/NewUserModel")




const newOrder = async function(req,res){
    let data = req.body
    let ab = req.headers.isfreeappuser
    // let b = a["isFreeAppUser"]
    // console.log(b);
   //  console.log(ab);
    if (!ab){
      return  res.send("Head is missing")
    }
    if(ab===true){
      data.isFreeAppUser = ab
    }
    
    let x = data.userId
   //  console.log(x);
    let a= await NewUserModel.findOne({_id:x})
   //  console.log(a);
    if(!a){
       return res.send("Invaild User")
    }


    let y = data.productId
   //  console.log(y);
    let b = await NewProductModel.findOne({_id:y})
   //  console.log(b);
    if(!b){
       return res.send("Invaild Product")
    }
    //For paid user app and the user has sufficient balance. We deduct the balance from user's balance and update the user. We create an order document

    if(ab === true){
      // let userBal = await NewUserModel.find().select({balance: 1,_id: 0})
      // console.log(userBal);
   
    const kuchBhi =async function(req,res){
      let bal = await NewUserModel.findById(req.body['userId']).select({_id: 0, balance: 1})
      let pri = await NewProductModel.findById(req.bpdy['productId']).select({_id: 0, price: 1})
       let baki =bal['balance']
      let  mon =  pri['price']
      // console.log(baki);
      // console.log(mon);

      let is =req.body.isFreeAppUser
      let remainBal = bal['balance']- pri['price']

      if(is=== true){
         let amt = req.body
         amt['amount'] = 0
         let upDateAmt = await NewOrderModel.create(amt)
        res.send({msg: upDateAmt})

      }
      if(is=== false ){
         if(remainBal>0){
         let update2 = await NewUserModel.updateOne({balance:remainBal})
         let update3 = await NewOrderModel.updateOne({amount:mon},{isFreeAppUser: false})
         let update4 ={userId,productId,amount,isFreeAppUser,date}
         let last = await NewOrderModel.create(update4)
         res.send({msg: last})
      }else{
         res.send("insufficient Balance")
      }
      }
   }

      }
      let savedData =await NewOrderModel.create(data)

    res.send({msg:savedData})


      }
   //}



    
   
   //}

module.exports.newOrder=newOrder