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

    var jsonParser = bodyParser.json();
//app.use(express.bodyParser());
//app.use(express-xml-bodyparser())
/*
app.post("/app", function (req, res) {
	
     console.log(req.body); // populated!
           res.send(req.body.id);
});
*/

//push azure allen master !!!


app.post('/api', jsonParser,function (req,res,next) {
   //console.log(util.inspect(req));
   var xml = "<note><to>Tove</to><from>Allen</from><heading>Reminder</heading><body>Don't forget me this weekend!</body></note>"
       var buf='';
           req.setEncoding('utf8');
              req.on('data',function(chunk){buf+=chunk});
                 if (req._body) return next();
                     req.body = req.body || {};

       parser.parseString(buf, function (err, json_result) {//解析FTP丟入的XML檔案

if(err){

	err.status=400;

    }
       else{
              res.send(json_result);//need Json

                  console.log(req.body);

                      console.log('!!!!!!!!!!!')

                         console.log(json_result);
               
                            console.log('test post');
        }
    
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