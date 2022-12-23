const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://functionup-cohort:G0Loxqc9wFEGyEeJ@cluster0.rzotr.mongodb.net/Pritesh8769811-DB?retryWrites=true&w=majority", {
    useNewUrlParser: true 
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

var getIP = require('ipware')().get_ip; //use to get IP of client
app.use (function (req, res, next) {
        
    //var dateTime = new Date()
    console.log('Date and Time :',Date());

    var ipInfo = getIP(req);
    console.log('Ip :',ipInfo.clientIp);
    // { clientIp: '127.0.0.1', clientIpRoutable: false }

    console.log('Route :',req.originalUrl)
     //$route = Route::current(); $name = $route->getName();

    console.log ("to print on evry api we use gplobal middleware : inside GLOBAL MW");
    next(); 
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
