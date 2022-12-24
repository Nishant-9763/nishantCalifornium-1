const NewUserModel = require("../models/NewUserModel")

const newUser = async function(req,res){
    let data = req.body

    let a = req.headers.isfreeappuser
    // let b = a["isFreeAppUser"]
    // console.log(b);
    // console.log(a);
    // if(a ==true){
    //     let update = await NewUserModel.updateMany({},{$set:{isFreeAppUser: "true"}})
    //         console.log(update);
    //     }
    // console.log(a);

    

    if (!a){
        
      return  res.send("Head is missing")
    }
    if(a===true){
        data.isFreeAppUser =a
        res.send("hii")
    }
    // console.log(data.isFreeAppUser)
    // console.log(a)
    

    
    
    
    let savedData = await NewUserModel.create(data)

    res.send ({Msg : savedData})
    // res.send("jii")
}

module.exports.newUser=newUser