const mongoose =require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const newOrerSchema = new mongoose.Schema({
    userId : {
        type : ObjectId,
        ref : 'newusercollection'
    },
    productId :{
        type: ObjectId,
        ref : 'newproductcollection'
    },
    amount : 0,
    isFreeAppUser :Boolean,
    date : String
    
},{timestamps : true})

module.exports= mongoose.model("newordercollection",newOrerSchema)