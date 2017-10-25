'use strict'

const View = require('./view')
const Model = require('./model')

class Controller{
	constructor(menu, file){
		let split = menu[0] == undefined ? undefined : menu[0].split(':')
		this.submenu = split == undefined ? undefined : split[1]
		this.menu = split == undefined ? undefined : split[0]
		this.task = menu[1]
		this.tag  = menu.slice(2)
		this.file = file 
		this.json = Model.readFile(this.file)
	}

	view_menu(){
		
		if(this.menu == 'help'){
			View.Menu(this.menu)
		}
		else if(this.menu == 'list'){
			switch(this.submenu){
				case undefined :
					View.Menu(this.menu, this.json)
					break;
				case 'completed' :
					View.Menu(this.submenu, this.task_sorting(this.task))
					break;
				case 'uncompleted' :
					View.Menu(this.submenu, this.json)
					break;
				case 'created' :
					View.Menu(this.menu, this.task_sorting(this.task))
					break;

				default: break;
			}		
		}
		else if(this.menu == 'add'){
			Model.addTask(this.file, this.olah_json())
			View.Menu(this.menu, this.task)
		}
		else if(this.menu == 'task'){
			View.Menu(this.menu, this.find())
		}
		else if(this.menu == 'delete'){
			View.Menu(this.menu, this.find())
			Model.addTask(this.file, this.delete(this.find()))	
		}
		else if(this.menu == 'complete'){
			this.task_complete(this.find())
			Model.addTask(this.file, this.json)	
		}
		else if(this.menu == 'uncomplete'){
			this.task_uncomplete(this.find())
			Model.addTask(this.file, this.json)	
		}
		else if(this.menu == 'tag'){
			this.task_tag(this.find())
			Model.addTask(this.file, this.json)
			View.Menu(this.menu, this.json)	
		}
		else if(this.menu == 'filter'){
			View.Menu(this.menu, this.task_filter(this.submenu))
		}
		else{
			View.Menu(this.menu)
		}
	}

	olah_json(){

		let obj = {
			id : this.json.length+1,
			task : this.task,
			status : false,
			tag : [],
			created : new Date()
		}

		let data_json = []
		
		this.json.forEach(json=>{
			data_json.push(json)
		})
		data_json.push(obj)

		return data_json
	}

	find(){
		let tampung = []
		if(this.task == undefined){
			return 'harus di isi id-nya'
		}

		this.json.forEach(json=>{
			if(json.id == this.task){
				tampung.push(json)
			}
		})

		return tampung
	}

	delete(params){
		this.json.forEach((el, index)=>{
			if(params[0] == el){
				this.json.splice(index, 1)
			}
		})

		return this.json
	}

	task_complete(param){
		param[0].status = true

	}

	task_uncomplete(param){
		param[0].status = false
	}

	task_tag(param){
		param[0].tag = this.tag
	}

	task_filter(param){
		let arr = []
		// console.log(param)
		this.json.forEach(item=>{
			item.tag.forEach(tag=>{
				// console.log(tag)
				if(param == tag){
					arr.push(item)
				}
			})
		})

		return arr
	}

	task_sorting(param){

		if(param == 'asc'){
		this.json.sort(function compare(a, b){
			var dateA = new Date(a.created);
  			var dateB = new Date(b.created);
  			return dateA - dateB;
		})

		return this.json
		}
		else{
			this.json.sort(function compare(a, b){
			var dateA = new Date(a.created);
  			var dateB = new Date(b.created);
  			return dateB - dateA;
		})

			return this.json
		}
	}

	
}


module.exports =Controller

// let control = new Controller('list', 'data.json')
// control.list_menu()