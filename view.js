'use strict'

class View{
	static Menu(option, data){
		switch(option){
			case undefined :
				console.log('node todo.js help')
				break;

			case 'help'	:
				console.log('node todo.js help\n'+
							'node todo.js list\n'+
							'node todo.js add <task_id>\n'+
							'node todo.js task <task_id>\n'+
							'node todo.js delete <task_id>\n'+
							'node todo.js complete <task_id>\n'+
							'node todo.js uncomplete <task_id>\n'+
							'node todo.js list:created asc|desc\n'+
							'node todo.js list:completed asc|desc\n'+
							'node todo.js tag <task_id> <tag_name_1> <tag_name_2>...<tag_name_N>')

				break;

			case 'list' :
				data.forEach(task=>{
					console.log(`${task.id}. [${task.status == false ? ' ' : 'x'}] ${task.task}`)
				})
				break;

			case 'add' :
			// console.log(data)
				console.log(`Added "${data}" to your TODO list...`)
				break;

			case 'task' :
			// console.log(typeof data)
				typeof data == 'string' ? console.log(data) :
				console.log(`${data[0].id}. ${data[0].task}`)
				break;

			case 'delete' :
				console.log(data)
				console.log(`Deleted "${data[0].task}" from your TODO list`)
				break;

			case 'completed' :
			// console.log(data)
				data.forEach(item=>{
					if(item.status == true){
						console.log(`${item.id}. [x] ${item.task}`)
					}
				})
				break;

			case 'uncompleted' :
			// console.log(data)
				data.forEach(item=>{
					if(item.status == false){
						console.log(`${item.id}. [ ] ${item.task}`)
					}
				})
				break;

			case 'tag' :
				// console.log(data)
				data.forEach(item=>{
					console.log(`Tagged task "${item.task}" with tags: ${item.tag[0]}, ${item.tag[1]}`)
					// console.log(item.tag[0])
				})
				break;

			case 'filter':
				// console.log(data)
				data.forEach(item=>{
					console.log(`${item.id}. ${item.task} [${item.tag}]`)
				})
				break;

			default: break;
		}
	}
}

module.exports = View
