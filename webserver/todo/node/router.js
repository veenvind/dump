var url=require('url');
function route(path){
	if(path=='/')
		return './todo';	
}
exports.route=route;
