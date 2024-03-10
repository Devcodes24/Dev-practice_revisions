
//Some basic important concepts and syntax of node.js

//starting with http in node

var http=require('http');
http.createServer(function(req,res){
  res.writeHead(200 , "plain-text"); //http returns a value as response to the request from domain
  res.write("Whatever you want to print😉");
  return res.end();
});


//parse url in node

var url=require('url');
var txt=url.parse('req.url',true).query; //here req.url provides whole url and we can take out any part from the url
//now write any part
res.write(txt.year);
res.write(txt.month); // url will contain the year and month
res.end();


//creating own module

export.myfunc=function(){
  return Date;
}// this myfunc will be exported for other files and any file can access

var importing = require('./firstmodule');
res.write("current date time is: "+importing.myfunc());
res.end();
}).listen(8080);
