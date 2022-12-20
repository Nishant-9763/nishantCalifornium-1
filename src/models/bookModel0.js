const mongoose = require("mongoose")

const bookSchema = new mongoose.Schema ({
    name : String,
    author_id :{
        type : Number,
        required : true

    } ,
    price : Number,
    rating : Number,
    age : mongoose.Schema.Types.Mixed,
    isDeleted:{
        type:Boolean,
        default: false
    }

}, {timestamps : true})



module.exports=mongoose.model('books0',bookSchema)