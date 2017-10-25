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

	getAllTasks(args = '') {
		return this.data;
	}

	getAllTasksBy(args = '', sortBy = 'asc') {
		let tasks = this.getAllTasks();
		let tasksBy = [];

		if (args.substring(0, 6) === 'filter') {
			let subCommand = args.substring(7, args.length).length > 0 ? args.substring(7, args.length) : '';

			for (var i = 0; i < tasks.length; i++) {
				
				if (tasks[i].tags.indexOf(subCommand.toString()) === 0) {
					tasksBy.push(tasks[i]);
				}
			}

			return tasksBy;
		}

		if (args === 'completed') {
			for (var i = 0; i < tasks.length; i++) {
				tasksBy.push(tasks[i]);
			}

			if (sortBy === 'desc') {
				tasksBy.sort((a,b) =>  new Date(b.completed_at) - new Date(a.completed_at));
				return tasksBy;

			} else if (sortBy === 'asc'){
				tasksBy.sort((a,b) =>  new Date(a.completed_at) - new Date(b.completed_at));
				return tasksBy;
			}	
			
			return tasksBy;
		}

		if (args === 'created') {
			for (var i = 0; i < tasks.length; i++) {
				tasksBy.push(tasks[i]);
			}
			
			if (sortBy === 'desc') {
				tasksBy.sort((a,b) =>  new Date(b.created_at) - new Date(a.created_at));
				return tasksBy;
			} else {
				tasksBy.sort((a,b) =>  new Date(a.created_at) - new Date(b.created_at));
				return tasksBy;
			}
		}
	}

	setTagsById(taskId = 0, tags = []) {
		let tasks = this.getAllTasks();
		let finalTasks = [];
		let taggedTaskName = '';

		for (var i = 0; i < tasks.length; i++) {
			if (+taskId === tasks[i].id) {
				tasks[i].tags = tags;
				taggedTaskName = tasks[i].task;
			}

			finalTasks.push(tasks[i]);
		}

		this.model.saveData(JSON.stringify(finalTasks));
		TodoView.showMessage(`Tagged task "${taggedTaskName}" with tags: ${tags.toString()}`);
	}

	setCompleteById(taskId = 0, isComplete = true) {
		let tasks = this.getAllTasks();
		let finalTasks = [];
		let taskName = '';
		let completeStatus = isComplete === true ? 'completed' : 'uncompleted';

		for (var i = 0; i < tasks.length; i++) {
			if (+taskId === tasks[i].id) {
				tasks[i].isComplete = isComplete;
				tasks[i].completed_at = new Date();
				taskName = tasks[i].task;
			}

			finalTasks.push(tasks[i]);
		}

		this.model.saveData(JSON.stringify(finalTasks));
		TodoView.showMessage(`Task "${taskName}" is ${completeStatus}`);
	}

	getNewTaskId() {
		let newId = this.getAllTasks()[this.getAllTasks().length - 1].id; 
		
		if (newId !== null) {
			return newId + 1;
		} else {
			return 1;
		}
	}

	createNewTask(taskTitle) {
		let data = this.getAllTasks();
		data.push({ 
			id: this.getNewTaskId(),
			task: taskTitle,
			isComplete: false,
			tags: [],
			created_at: new Date(),
			completed_at: new Date()  
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
		let secondInputParam = args[2];

		if (args.length === 0 || typeof args === 'undefined' || basicCommand === 'help') {
			TodoView.showHelp();
		} 
		else  {
			// List
			if (basicCommand.substring(0, 4) === 'list') {
				let subCommand = basicCommand.substring(5, basicCommand.length).length > 0 ? basicCommand.substring(5, basicCommand.length) : '';
				
				if (subCommand === 'completed') {
					// TodoView.showAllTasks(this.getAllTasksBy('completed'));
					if (inputParam === 'asc') {
						TodoView.showAllTasksWithDate(this.getAllTasksBy('completed', 'asc'));
					} else {
						TodoView.showAllTasksWithDate(this.getAllTasksBy('completed', 'desc'));
					}


				} else if (subCommand === 'created') {
					if (inputParam === 'asc') {
						TodoView.showAllTasksWithDate(this.getAllTasksBy('created', 'asc'));
					} else {
						TodoView.showAllTasksWithDate(this.getAllTasksBy('created', 'desc'));
					}
					
				} else {
					TodoView.showAllTasks(this.getAllTasks());
				}
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

			// Tag by id
			else if (basicCommand === 'tag' && isNaN(inputParam) === false) {
				let tagsName = args.slice(2);
				this.setTagsById(inputParam, tagsName);
			}

			//Filter by tag name
			else if (basicCommand.substring(0, 6) === 'filter') {
				let subCommand = basicCommand.substring(7, basicCommand.length).length > 0 ? basicCommand.substring(7, basicCommand.length) : '';

				TodoView.showAllTasks(this.getAllTasksBy(basicCommand));
			}

			// Complete
			else if (basicCommand === 'complete' && isNaN(inputParam) === false) {
				this.setCompleteById(inputParam, true);
			}

			// Uncomplete
			else if (basicCommand === 'uncomplete' && isNaN(inputParam) === false) {
				this.setCompleteById(inputParam, false);
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