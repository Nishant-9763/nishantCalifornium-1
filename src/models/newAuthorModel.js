const mongoose = require("mongoose")

const myauthorSchema = new mongoose.Schema({
    authorName : String,
    age : Number,
    address : String,
    rating : Number
},{timestamps : true})

module.exports = mongoose.model("my author collection" , myauthorSchema)


