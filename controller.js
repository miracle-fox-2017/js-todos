const Model = require('./model')
const View = require('./view')

class Controller {
	// static processHelp(){
	// 	View.displayHelp(Model.readHelp())
	// }

	static processInput(input){

		let newData = ''
		if(input.length>1){
			input.forEach((inputData, index) =>{
				if(index>=1 && index<input.length-1){
					newData +=inputData+' '
				}else
					if(index === input.length-1){
						newData +=inputData
					}
			})
		}

		switch(input[0]) {
			case undefined:
			case 'help':
				View.displayHelp(Model.readHelp())
				break
			case 'list':
				View.displayTask(Model.taskToString())
				break
			case 'add':
				Model.inputTask(newData, result =>{
					View.displayAddTask(result)
				})
				break
			case 'find':
				View.displayTask(Model.findTask(newData))
				break
			case 'delete':
				Model.deleteTask(newData, result =>{
					View.displayDeleteTask(result)
				})
				break
			case 'complete':
				Model.completeTask(newData, result =>{
					View.displayCompleteTask(result)
				}) 
				break
			case 'uncomplete':
				Model.uncompleteTask(newData, result =>{
					View.displayUncompleteTask(result)
				})
				break
			case 'list:created':
				Model.displayTask(newData, result=>{
					View.displayTask(result)
				})
				break
			case 'list:completed':
				Model.displayCompleteTask(newData, result=>{
					View.displayTask(result)
				})
				break
			case 'tag':
				Model.addTagTask(newData, result=>{
					View.displayTaggingTask(result)
				})
				break
			default:
				Model.filterTagTask(input[0], result=>{
					View.displayTask(result)
				})	
		}
	}
}

module.exports = Controller
// Controller.processHelp()