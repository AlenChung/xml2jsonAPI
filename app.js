var express = require('express');
var app = express();   //expressjs.4.X have three way to req.params/body/query
var util = require('util');
var http = require('http');
//var router = express.Router();
var xmlparser=require('express-xml-bodyparser')
var xml2js=require('xml2js');//xml2js Mode
var parser= new xml2js.Parser();//create xml to json parser object

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));//what is true and false
app.use(bodyParser.json());
//var jsonParser = bodyParser.json();
//app.use(express.bodyParser());








app.post('/api', function (req,res,next) {
   //console.log(util.inspect(req));
   //var xml = "<note><to>Tove</to><from>Jani</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>"
        parser.parseString(req.body, function (err, result) {//解析FTP丟入的XML檔案
              res.send(result);//need Json
                 console.log(res.body);
                      console.log('!!!!!!!!!!!!!')

                         console.log(result);
               
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