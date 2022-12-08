const express = require('express');
const router = express.Router();
const intro = require('./introduction')
const employee = require('./employee')
const _ = require('underscore')
const lcome =require('../logger/logger.js')
const date = require('../util/helper')
const month = require('../util/helper')
const batch = require('../util/helper')
const trim = require ('../validator/formatter')
const lower = require ('../validator/formatter')
const upper = require ('../validator/formatter')
const a = require('lodash')

router.get('/test-me', function (req, res) {
    console.log("email from introduction module", intro.myEmail)
    intro.myFunction('Sabiha')
    console.log("email from employee module", employee.myEmail)

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let result = _.first(days, 4)
    console.log(`Result from underscore function is ${result}`)
    lcome.elcome()
    date.date()
    month.month()
    batch.batch()
    trim.trim()
    lower.lower()
    upper.upper()
    let months =["January","February","March","April","May","June","July","August","September","Octomber","November","December"]
    console.log(a.chunk(months,[3]))
    let odds = [1,3,5,7,9,11,13,15,17,19]
    console.log(a.tail(odds));
    let x =[1,2,3]
    let y =[5,3,4]
    let z =[7,6,5]
    let u =[7,9,8]
    let v =[9,10,11]
    console.log(a.union(x,y,z,u,v));
    let aa =[["hooor","The Shining"],
             ["drama","Titanic"],
             ["thriller","Shutter Island"],
             ["fantasy","Oans Labyrinth"]]
    console.log(a.fromPairs(aa));





    res.send('any dummy text')
});


router.get('/test-you', function(req, res){
    console.log("I am here")
    res.send("very important text")
})


module.exports = router;