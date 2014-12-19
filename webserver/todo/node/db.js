var mysql= require('mysql');
var todo= require('./todo');
var pool = mysql.createPool({
  host     : 'localhost',
  user     : 'todo',
  password : 'organizer',
  database : 'organizer',
});

function runQuery(query,callback){
	pool.getConnection(function(err, connection) {
	//console.log(query);
		connection.query(query, function(err, rows, fields) {
  			if (err) console.log("error running query");
			console.log('query successful : '+query);
			console.log(rows.toString());
			if(callback) callback(rows);
    			connection.end();
		});
	});
}

function updateStatus(type,id,status)
{
	if(type=='goal')
		query='update goallist set status="'+status+'" where id='+id;
	else if(type=='task')
		query='update tasklist set status="'+status+'" where id='+id;
	runQuery(query,todo.updatePage);
}

function addGoal(goal,short_desc)
{
	query='insert into goallist (goal,short_desc,status) values ("'+goal+'","'+short_desc+'","new")';
	runQuery(query,todo.updatePage);
}

function addTask(task,goalId)
{
	query='insert into tasklist task,goalId,status values ("'+task+'","'+goalId+'","new")';
	runQuery(query,todo.updatePage);
}

function getUnfinishedTasks(callback){
	query='select task,tasklist.taskId,goallist.goalId,goallist.short_desc,tasklist.status,goallist.targeted_by from tasklist,goallist where tasklist.status not in ("7","8","9")'
	runQuery(query,callback);
}
exports.addTask=addTask;
exports.addGoal=addGoal;
exports.updateStatus=updateStatus;
exports.getUnfinishedTasks=getUnfinishedTasks;
