const CustomerModel =require("../models/customerModel")


const createCustomer = async function(req,res){
    let data = req.body
    let savedData=await CustomerModel.create(data)
    res.send({newCustomer: data})
}

const getCustomer = async function(req,res){
    let data = await CustomerModel.find({status:"ACTIVE"})
    res.send({getCustomer :data}) 
}



module.exports.createCustomer=createCustomer
module.exports.getCustomer=getCustomer