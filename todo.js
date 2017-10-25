const View = require('./view')
const model = require('./todomodel')
const todomodel = require('./todomodel')
class Todo {	
	constructor(file){
		this.file = file;
		this.data = model.readFile(file);
	}
	checkCommand(argv){
		if (argv === undefined){
			View.showHelp()
		}else {
			if (argv[0] === "help"){
				return View.helpCommand();
			}
			if (argv[0] === "list"){
				return View.showList(this.data)
			}		
			if (argv[0] === "add" && argv[1] !== ""){
				todomodel.saveFile(this.file,this.addTask(argv.slice(1)));
				return View.addTask(argv.slice(1))
			}
			if (argv[0] === "task" && argv[1] !== ""){
				if (argv[1] > this.data.length){
					return View.showErr()
				}
				return View.searchTask(this.search(argv.slice(1)))
			}
			if (argv[0] === "delete" && argv[1] !== ""){
					return todomodel.saveFile(this.file,this.deleteTask(argv.slice(1)));
			}
			if (argv[0] === "complete" && argv[1] !== ""){
				return todomodel.saveFile(this.file,this.checkComplete(argv.slice(1)));
			}
			if (argv[0] === "uncomplete" && argv[1] !== ""){	
				return todomodel.saveFile(this.file,this.checkUnComplete(argv.slice(1)));
			}
			if (argv[0] === "list:created" && argv[1] !== ""){
				if(argv[1] === "asc"){
					View.showSort(this.data.sort(function (x,y){
						return  new Date(x.created_date) - new Date(y.created_date)
					}))
				}		
				if(argv[1] === "desc"){
					View.showSort(this.data.sort(function (x,y){
						return  new Date(y.created_date) - new Date(x.created_date)
					}))	
				}					
			}
			if (argv[0] === "list:completed" && argv[1] !== ""){
				if(argv[1] === "asc"){
					View.showSort(this.data.sort(function (x,y){
						return  new Date(x.date_completed) - new Date(y.date_completed)
					}))
				}		
				if(argv[1] === "desc"){
					View.showSort(this.data.sort(function (x,y){
						return  new Date(y.date_completed) - new Date(x.date_completed)
					}))	
				}					
			}	
			if (argv[0] === "tag" && argv[1] !== ""){
				return todomodel.saveFile(this.file,this.addTag(argv[1],argv.slice(2)));
											
			}														
			else {
				argv = argv.toString().split(":")
				if (argv[0] === "filter" && argv[1] !== ""){
					let dataFilter = this.checkFilter(argv[1])	
					let newData = [];
					for (let i = 0 ; i<dataFilter.length ; i++){
						newData.push(this.data[dataFilter[i]])
					}
					newData = newData.sort(function (x,y){
						return  new Date(x.created_date) - new Date(y.created_date)
					})
					return View.filter(newData)
				}

				return View.showErr()						
			}	
		}
	}
	checkFilter(filterTag){
		let arr = []
		for(let i = 0 ; i <this.data.length ; i++){
			if (this.data[i].tag.indexOf(filterTag) !== -1){
				arr.push(i)
			}
		}
		if (arr.length !== 0){
			return arr;
		}
		View.showErr()
	}
	addTag(taskId,param){
		taskId = taskId-1;
		View.showTag(this.data[taskId].task,param);
		this.data[taskId].tag = param
		return this.data
	}
	addTask(addData){
		addData = addData.join(" ")
		this.data.push({
			"id" : (this.data.length+1).toString(),
			"complete" : false,
			"task" : addData,
			"tag" : '',
			"created_date" : new Date(),
			"date_completed" : ''
		})
		return this.data;
	}
	search(searchData){
		for (let i = 0 ; i<this.data.length ; i++){
			if (this.data[i].id == searchData){
				return this.data[i]
			}
		}
	}
	deleteTask(deleted){
		for (let i = 0 ; i<this.data.length ; i++){
			if (this.data[i].id == deleted){
				View.deleteTask(this.data[i].task)
				this.data.splice(i,1)
				return this.data
			}
		}
	}
	checkComplete(complete){
		for (let i = 0 ; i<this.data.length ; i++){
			if (this.data[i].id == complete){
				this.data[i].date_completed = new Date();
				View.taskComplete(this.data[i].task)
				this.data[i].complete = true; 
				return this.data
			}
		}		
	}
	checkUnComplete(unComplete){
		for (let i = 0 ; i<this.data.length ; i++){
			if (this.data[i].id == unComplete){
				this.data[i].date_completed = '';
				View.taskUnComplete(this.data[i].task)
				this.data[i].complete = false; 
				return this.data
			}
		}		
	}
}


let argv = process.argv.slice(2)
let todo = new Todo('data.json')
todo.checkCommand(argv)
module.exports = Todo