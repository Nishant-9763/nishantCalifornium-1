const mongoose = require("mongoose")

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
}

const customerSchema =new mongoose.Schema({
    firstName : {
        type : String
    },
    lastName:{
        type : String
    },
    mobileNumber:{
        type : String,
        minlength :10,
        maxlength :10
    },
    DOB:{
        type:String
    },
    // emailID : {
    //     type : String
    // },
    email: {
        type: String,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    address : {
        type : String
    },
    customerID : {
        type : String
    },
    status : {
        type : String,
        default: "ACTIVE",
        enum :["ACTIVE","INACTIVE"]
    }
},{timestamps : true})

module.exports = mongoose.model("customer collection" ,customerSchema ) 