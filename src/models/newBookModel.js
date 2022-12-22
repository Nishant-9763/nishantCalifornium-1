const mongoose = require("mongoose")
const ObjectId =mongoose.Schema.Types.ObjectId


const myBookSchema = new mongoose.Schema({
    name : String,
    author :{
        type : ObjectId,
        ref : "my author collection"
        
    },
    price : Number,
    rating: Number,
    publisher : {
        type :ObjectId,
        ref : "my publisher collection"
    },
    isHardCover : {
        type : Boolean,
        default: false
    
    }
},{timestamps:true})

module.exports = mongoose.model("my book collection",myBookSchema)