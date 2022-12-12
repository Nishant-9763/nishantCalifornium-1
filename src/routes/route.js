const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const mentorModule = require('../abc/xyz/myModule'); 
const req = require('express/lib/request');
const { route } = require('express/lib/application');
const { application } = require('express');


router.get("/profile-details", function(req, res){
    // Write the LOGIC here
    res.send('dummy response')
})

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    console.log(`The mentor of the day is ${mentorModule.mentor}`)

    res.send('any dummy text from route handler 1')
});


router.get('/test-me', function(req, res){
    console.log("I am here")
    res.send("any dummy text from route handler 2")
})

router.get('/students', function (req, res){
    let students = ['Sabiha', 'Neha', 'Akash']
    res.send(students)
})

// PATH Param example
router.get('/student-details/:name', function(req, res){
    /*
    params is an attribute inside request that contains 
    dynamic values.
    This value comes from the request url in the form of an 
    object where key is the variable defined in code 
    and value is what is sent in the request
    */

    let requestParams = req.params

    // JSON strigify function helps to print an entire object
    // We can use many ways to print an object in Javascript, JSON stringify is one of them
    console.log("This is the request "+ JSON.stringify(requestParams))
    let studentName = requestParams.name
    console.log('Name of the student is ', studentName)
    
    res.send('Dummy response')
})

// PATH Param example
router.get("/profile/:name", function(req, res){
    console.log('Printing the request to find out wjere name is stored',req.params)
    console.log('user name is',req.params.name)
    //console.log(`User requesting for profile is ${name}`)
    res.send("dummy details")
    res.send("Nishant")
})

// Query Param example
router.get("/shoes", function(req, res){
    console.log("The filter options for shoes are -",req.query)
    //req.query.size
    //req.query.brand
    res.send("dummy shoes response")
})

router.get("/movies", function(req, res){
    let arr = ["Extraction","Men in Black","Hatti Mere Satti","Saudaghar"]
    res.send(`Movies array = [${arr}]`)
})

    router.get("/movies/:indexnumber2", function(req,res){
        let arr = ["Extraction","Men in Black","Hatti Mere Satti","Saudaghar"]
        let id =req.params.indexnumber2
        if(id>=arr.length){
            res.send("enter valid number")
        }

   
    
    res.send(`${arr[id]}`)
})

router.get("/films",function(req, res){
    let arr = [{"id":1,"name" :"Extraction"},
                {"id":2,"name":"Men in Black"},
            {"id":3,"name":"Hatti Mere Satti"},
            {"id":4,"name":"Saudaghar"}]
            console.log(arr)

    res.send(arr)
})

router.get("/films/:filmId",function(req,res){
    let arr = [{"id":0,"name" :"Extraction"},
                {"id":1,"name":"Men in Black"},
            {"id":2,"name":"Hatti Mere Satti"},
            {"id":3,"name":"Saudaghar"}]
    let uy  =req.params.filmId
    if (uy>=arr.length){
        res.send("enter valid id")
    }
    
    res.send(arr[uy])
})



router.get("/sol1", function(req,res){
    let arr=[1,2,3,5,6,7]
    let missingNumber
    let sum =0
    let n = arr[arr.length-1]
    // missingNumber = 28-24
    for(let i =0; i<arr.length; i++){
         sum += arr[i]
    }
    console.log(sum)
    
    missingNumber=(n*(n+1))/2-sum


    res.send({data:missingNumber })
})

router.get("/sol2", function(req,res){
    let arr=[33,34,35,37,38]
    let missingNumber
    // missingNumber = 213 - 177
    l = arr[arr.length-1]
    f =arr[0]
    n = arr.length +1
    let sum =0
    for(let i= 0; i<arr.length;i++){
        sum =sum +arr[i]
    }
    missingNumber = n*(f+l)/2 - sum
    console.log(l)
    console.log(f)
    console.log(n)
    console.log(sum)

    res.send({data:missingNumber})
})


module.exports = router;