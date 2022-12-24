const mongoose = require("mongoose")

const newProductSchema = new mongoose.Schema({
    name : String,
    category : String,
    price : {
        type : Number,
        required : true
    }
},{timestamps : true})

module.exports = mongoose.model("newproductcollection",newProductSchema)