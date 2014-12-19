var http = require('http');
var server= require('./server');
var db= require('./db');
var router=require('./router');

server.start(router.route);

/*Status can be one of the followig
invalid, new, blocked, working, done,*/

