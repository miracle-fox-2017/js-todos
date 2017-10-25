const Tag = require('./tag');
const Task = require('./task');
const TodoModel = require('./todo-model');
const TodoView = require('./todo-view');

//Controller
class Todo {
	constructor(file) {
		this.file = file;
		this.model = new TodoModel(this.file);
		this.data = this.model.loadData();
	}

	getAllTasks() {
		return this.data;
	}

	getNewTaskId() {
		let newId = this.getAllTasks()[this.getAllTasks().length - 1].id; 
	
		return newId + 1;
	}

	createNewTask(taskTitle) {
		let data = this.getAllTasks();
		data.push({ 
			id: this.getNewTaskId(),
			task: taskTitle,
			isComplete: false,
			tags: [ {id: 1, name: "Jobs"} ],
			created_at: new Date() 
		});

		
		this.model.saveData(JSON.stringify(data));
		TodoView.showMessage(`Added "${taskTitle}" to your TODO list...`);
	}

	findTaskById(taskId) {
		let tasks = this.getAllTasks();
		let result = '';

		for (var i = 0; i < tasks.length; i++) {
			if (+taskId === tasks[i].id) {
				result = `${tasks[i].id}.  ${tasks[i].task}`;
			}
		}

		TodoView.showMessage(result);
	}

	deleteTaskBydId(taskId) {
		let tasks = this.getAllTasks();
		let result = '';
		let finalTask = [];
		let deletedTask = [];

		for (var i = 0; i < tasks.length; i++) {
			if (+taskId !== tasks[i].id) {
				finalTask.push(tasks[i]);
			} else {
				deletedTask.push(tasks[i]);
			}
		}

		TodoView.showMessage(`Deleted ${deletedTask[0].task} from your TODO list...`);
		this.model.saveData(JSON.stringify(finalTask));
	}

	getCommand(args) {
		let basicCommand = args[0];
		let inputParam = args[1];

		if (args.length === 0 || typeof args === 'undefined' || basicCommand === 'help') {
			// TodoView.showHelp();
		} 
		else  {
			// List
			if (basicCommand.substring(0, 4) === 'list') {
				TodoView.showAllTasks(this.getAllTasks());
			}

			// Add
			else if (basicCommand === 'add' && typeof inputParam !== 'undefined' && inputParam.length > 0) {
				this.createNewTask(inputParam);
			}

			// Find
			else if (basicCommand === 'task' && isNaN(inputParam) === false) {
				this.findTaskById(inputParam);
			}

			// Delete
			else if (basicCommand === 'delete' && isNaN(inputParam) === false) {
				this.deleteTaskBydId(inputParam);
			}

			// Complete
			else if (basicCommand === 'complete' && isNaN(inputParam) === false) {
				console.log('Set complete data lewat Model');
			}

			// Uncomplete
			else if (basicCommand === 'uncomplete' && isNaN(inputParam) === false) {
				console.log('Set uncomplete data lewat Model');
			}

			else {
				TodoView.showMessage('Wrong Command!');
				TodoView.showHelp();
			}
		}
	}
}

let todo = new Todo('data.json');

todo.getNewTaskId();

let commands = process.argv.splice(2);
todo.getCommand(commands);