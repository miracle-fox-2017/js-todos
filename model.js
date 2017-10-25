const fs = require('fs')

class Model {

	static readHelp(){
		let tempResult = fs.readFileSync('help.json')
		let result = JSON.parse(tempResult)
		return result.help
	}

	static readTask(){
		let jsonResult = fs.readFileSync('data.json')
		let objResult = JSON.parse(jsonResult)
		
		return objResult
	}

	static taskToString(data){

		if(!data){
			let objResult = this.readTask()
			let result = []

			objResult.forEach(task =>{
				if(!task[Object.keys(task).toString()][1]){
					result.push(Object.keys(task).toString()+'. [ ] '+task[Object.keys(task).toString()][0]);	
				}else{
					console.log('masuk sini');
					result.push(Object.keys(task).toString()+'. [x] '+task[Object.keys(task).toString()][0]);
				}
			})
			return result	
		}else{
			let result = []

			data.forEach(task =>{
				if(!task[Object.keys(task).toString()][1]){
					result.push(Object.keys(task).toString()+'. [ ] '+task[Object.keys(task).toString()][0]);	
				}else{
					result.push(Object.keys(task).toString()+'. [x] '+task[Object.keys(task).toString()][0]);
				}
			})
		
			return result
		}
	}

	static inputTask(data, cb){
		let tempTask = this.readTask()
		let last_id = parseInt(Object.keys(tempTask[tempTask.length-1]))+1
		let obj = {}
		obj[last_id] = [data, false, new Date()]
		tempTask.push(obj)
		// console.log(tempTask);
		fs.writeFile('data.json', JSON.stringify(tempTask), err =>{
			if(!err){
				cb(data)
			}
		})
	}

	static findTask(data){
		let tempTask = this.readTask()
		let result = tempTask.filter( findData =>{
			return Object.keys(findData)[0] === data
		})

		return this.taskToString(result)
	}

	static deleteTask(data, cb){
		let tempTask = this.readTask()
		let objDelete = tempTask.filter( findData =>{
			return Object.keys(findData)[0] === data
		})[0]
		let taskName = objDelete[data][0]
		let index = tempTask.indexOf(objDelete)
		tempTask.splice(index, 1)

		fs.writeFile('data.json', JSON.stringify(tempTask), err =>{
			if(!err){
				cb(taskName)
			}else{
				console.log('error tong');
			}
		})
	}

	static completeTask(data, cb){
		let tempTask = this.readTask()
		let objComplete = tempTask.filter( findData =>{
			return Object.keys(findData)[0] === data
		})[0]

		objComplete[data][1] = true
		objComplete[data][3] = new Date()
		
		fs.writeFile('data.json', JSON.stringify(tempTask), err =>{
			if(!err){
				cb(data)
			}
		})
	}

	static uncompleteTask(data, cb){
		let tempTask = this.readTask()
		let objUncomplete = tempTask.filter( findData =>{
			return Object.keys(findData)[0] === data
		})[0]

		objUncomplete[data][1] = false
		objUncomplete[data][3] = null

		fs.writeFile('data.json', JSON.stringify(tempTask), err =>{
			if(!err){
				cb(data)
			}
		})		
	}

	static displayTask(data, cb){
		let tempTask = this.readTask()

		if(data === 'asc' || data === ''){
			tempTask.sort((a,b) =>{
				let date_1 = a[Object.keys(a).toString()][2]
				let date_2 = b[Object.keys(b).toString()][2]

				if(date_1<date_2){
					return -1
				}else
					if(date_1 === date_2){
						return 0
					}else{
						return 1
					} 
			})
			cb(this.taskToString(tempTask))
		}else
			if(data === 'desc'){
				tempTask.sort((a,b) =>{
					let date_1 = a[Object.keys(a).toString()][2]
					let date_2 = b[Object.keys(b).toString()][2]

					if(date_1>date_2){
						return -1
					}else
						if(date_1 === date_2){
							return 0
						}else{
							return 1
						} 
				})
			cb(this.taskToString(tempTask))
			}
	}

	static displayCompleteTask(data, cb){

		let tempTask = this.readTask()
		let completeTask = tempTask.filter( result =>{
			return result[Object.keys(result).toString()][3] != null
		})

		if(data === 'asc' || data === ''){
			completeTask.sort((a,b) =>{
				let date_1 = a[Object.keys(a).toString()][2]
				let date_2 = b[Object.keys(b).toString()][2]

				if(date_1<date_2){
					return -1
				}else
					if(date_1 === date_2){
						return 0
					}else{
						return 1
					} 
			})
			cb(this.taskToString(completeTask))
		}else
			if(data === 'desc'){
				completeTask.sort((a,b) =>{
					let date_1 = a[Object.keys(a).toString()][2]
					let date_2 = b[Object.keys(b).toString()][2]

					if(date_1>date_2){
						return -1
					}else
						if(date_1 === date_2){
							return 0
						}else{
							return 1
						} 
				})
			cb(this.taskToString(completeTask))
			}
	}

	static addTagTask(data, cb){
		let inputTag = data.split(' ')
		let tempTask = this.readTask()
		let selectedTask = tempTask.filter( result=>{
			return Object.keys(result).toString() === inputTag[0]
		})[0]

		inputTag.forEach((dataInput,index)=>{
			if(index>0 && index<inputTag.length){
				selectedTask[Object.keys(selectedTask).toString()][4].push(dataInput)
			}
		})

		let output = [selectedTask[Object.keys(selectedTask).toString()][0], selectedTask[Object.keys(selectedTask).toString()][4].join(', ')]

		fs.writeFile('data.json', JSON.stringify(tempTask), err =>{
			if(!err){
				cb(output)
			}else{
				console.log('error tong');
			}
		})
	}

	static filterTagTask(data, cb){
		let inputTag = data.split(':')
		let tempTask = this.readTask()
		let output = []
		tempTask.forEach(result=>{
			if(result[Object.keys(result).toString()][4].indexOf(inputTag[1])!= -1){
				// console.log('masuk sini');
				output.push(result)
				// console.log(result[Object.keys(result).toString()]);
			}
		})
		// console.log(output);
		cb(this.taskToString(output))
	}
}

module.exports = Model
// Model.inputTask