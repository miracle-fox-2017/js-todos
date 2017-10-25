const Todo = require('./todo')
class View{
	static helpCommand(){
			console.log("node todo.js")
			console.log("node todo.js help")
			console.log("node todo.js list")
			console.log("node todo.js add <task_content>")
			console.log("node todo.js task <task_id>")
			console.log("node todo.js delete <task_id>")
			console.log("node todo.js complete <task_id>")
			console.log("node todo.js uncomplete <task_id>")
	}
	static showHelp(){
			console.log("Need Help , just insert node todo.js help")
	}
	static showList(list){
			console.log("----------------------------")
			console.log("LIST")
			for (let i = 0 ; i<list.length; i++){
				if (list[i].complete == true){
					list[i].complete = "[x]";
				}
				if (list[i].complete == false){
					list[i].complete = "[ ]";
				}
				console.log(list[i].id,list[i].complete, list[i].task ,list[i].tag)
			}
			console.log("----------------------------")
	}
	static addTask(added){
			console.log("Added "+added.join(" ")+" to your TODO list...")
	}
	static searchTask(searchData){
			console.log(searchData.id+". "+searchData.task)
	}		
	static deleteTask(deleted){
			console.log("Deleted "+deleted+" from your TODO list")
	}
	static taskComplete(completed){
			console.log(completed+" already Completed")
	}
	static taskUnComplete(unCompleted){
			console.log(unCompleted+ " not yet Completed")
	}
	static showSort(sortDate){
			console.log(sortDate);
	}
	static showTag(task,tags){
			console.log("Tagged task "+task+" with tags: "+tags.join(" "))
	}
	static filter(filterData){
			for (let i = 0 ; i<filterData.length; i++){
				console.log(filterData[i].id+"."+filterData[i].task+" "+filterData[i].tag+"   Created time => "+filterData[i].created_date)
			}
	}
	static showErr(){
			console.log("Wrong Input")
	}
}

module.exports = View