const mongoose= require("mongoose")

const newUserSchema= new mongoose.Schema ({
    name : String,
    balance : {
        type : Number,
        default : 100
    },
    address : String,
    age : Number,
    gender : {
        type : String,
        enum :["Male","Female","Others"]
    },
    isFreeAppUser : {
        type : Boolean,
        default : false
    }
},{timestamps : true})

module.exports= mongoose.model("newusercollection",newUserSchema)