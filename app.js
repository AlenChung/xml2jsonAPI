var express = require('express');
var app = express();   //expressjs.4.X have three way to req.params/body/query
var util = require('util');
var http = require('http');
//var router = express.Router();

var xml2js=require('xml2js');//xml2js Mode
var parser= new xml2js.Parser;//create xml to json parser object

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));//what is true and false
app.use(bodyParser.json());
//var jsonParser = bodyParser.json();
//app.use(express.bodyParser());


app.post('/api', function (req, res) {
   //console.log(util.inspect(req));
      parser.parseString(req.body, function (err, result) {
            res.send(result);//need Json
                console.log('test post');
    
   });
});


app.get('/user/:id', function (req, res) {
	
    res.send('user:' + req.params.id);//params only 

});


app.get('/', function (req, res) {
	
    res.send('name:' + req.query.name);//query only 

   
});


app.listen(8000, function () {
    console.log(' started.');
});