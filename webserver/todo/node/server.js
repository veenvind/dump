var http=require('http');
var url= require('url');

function start(route){
  http.createServer(function (req, res) {
    parsedurl=url.parse(req.url,true);
    var reqhandler=require(route(parsedurl.pathname));
    if(req.method=='GET')
    	reqhandler.handle(parsedurl.query,res);
    else if(req.method=='POST')
	reqhandler.handle(req.body,res);
  }).listen(8124, "127.0.0.1");
  console.log('Server running at http://127.0.0.1:8124/');
}
exports.start=start;
