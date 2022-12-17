const mongoose = require('mongoose');
const { stringify } = require('querystring');

const userSchema = new mongoose.Schema( {
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,
        required: true
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //"falana" will give an error
    },
    age: Number,
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });




const bookSchema =new mongoose.Schema({
    bookName : String,
    authorName : String,
    category : String,
    year : Number

})

const partySchema =new mongoose.Schema({
    firstName : String,
    lastName : String,
    age : Number,
    bringMoney :{
        type : String,
        required : true
    },
    food :{
        type : String,
        required :true,
        enum :["veg","nonVeg","noFood"]
    },
    drink:{
        type: String,
        required: true,
        enum:["softDrink","hardDrink","noDrink"]

    },
    partyTill:Number

}, {timestamps:true})



module.exports = mongoose.model('User', userSchema) //users
module.exports =mongoose.model("Books",bookSchema) //books
module.exports = mongoose.model("PartyPerson",partySchema)


// String, Number
// Boolean, Object/json, array