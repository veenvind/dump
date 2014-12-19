var db=require('./db');
var fs=require('fs');
function handle(data,res){  
	if(data.type=='add')
	{
		if(data.qtype=='task')
			db.addTask(data.task,data.goalId);
		else if(data.qtype=='goal')
			db.addGoal(data.goal,data.short_desc);
		//updatePage();
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello '+data.obj);
	}
	else if(data.type=='upd')
	{
		db.updateStatus(data.qtype,data.id,data.state);
		//updatePage();
		res.writeHead(200, {'Content-Type': 'text/plain'});
		res.end('Hello '+data.obj);
	}
}
function updatePage(){
	data=db.getUnfinishedTasks(createIndexPage);
}
function createIndexPage(data){
	//writehead();
	fs.writeFile("/tmp/todolist","test", function(err) {
		if(err) {
			console.log(err);
		} else {
			console.log("The file was saved!");
		}
	}); 
}
exports.handle=handle;
exports.updatePage=updatePage;
