
const x=function(req,res,next){
let a = req.headers.isfreeappuser
    // let b = a["isFreeAppUser"]
    // console.log(b);
    console.log(a);
    if (!a){
      return  res.send("Head is missing")
    }
    next()
    
}
// if header is true the product amount is zero and set isfreeAppuser ture in user
//if header is false then check product price and deduct amount from user balance (userbal-productprice) and order amount == product price and 

module.exports.x=x