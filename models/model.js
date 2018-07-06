const fs = require('fs')

class Model{
  constructor(file){
    this.parse_data = file
    this.to_do_data = []
  }

  readFile(){
    let parse_data = JSON.parse(fs.readFileSync(this.parse_data))
    this.to_do_data.push(parse_data)
  }

  saveFile(param,comment){
    let to_JSON = JSON.stringify(this.to_do_data[0])
    fs.writeFile('data.json',to_JSON,(err,saved)=>{
     if(err){
      console.log(`error`)
     }else{
      console.log(`\n=>> ${comment} "${param}" to your TO DO List...\n`)
     }
    })
  }

  to_do_list(){
    let list_container = ''
    for (var i = 0; i < this.to_do_data[0].length; i++) {
      if(this.to_do_data[0][i]['status'] === true){
        list_container += `${this.to_do_data[0][i]['id']}. [x] ${this.to_do_data[0][i]['task']}\n`
      }else{
        list_container += `${this.to_do_data[0][i]['id']}. [ ] ${this.to_do_data[0][i]['task']}\n`
      }
    }
    return list_container
  }

  add_to_do_list(list_add){
    let last_index = []
    for(let i=0; i<this.to_do_data[0].length; i++){
      last_index.push(this.to_do_data[0][this.to_do_data[0].length-1].id)
    }

    this.to_do_data[0].push({
      id     : (this.to_do_data[0].length === last_index[0]) ? (parse_data.length + 1) : last_index[0] + 1,
      status : false,
      task   : list_add,
      date   : new Date(),
    })
    this.saveFile(list_add, 'Added')
  }

  find_to_do_list(list_find){
    let find = ''
    for (let i=0; i<this.to_do_data[0].length; i++){
      if(this.to_do_data[0][i]['id'] == list_find){
        find += `${this.to_do_data[0][i]['id']}. ${this.to_do_data[0][i]['task']}\n`
      }
    }
    return `\n=== (FIND LIS) ===\n\n${find}`
  }

  delete_to_do_list(list_delete){
    let container   = []
    for(let i=0; i<this.to_do_data[0].length; i++){
      if(this.to_do_data[0][i]['id'] == list_delete){
        container.push(i)
      }
    }

    let for_delete  = this.to_do_data[0].splice(container,1)
    if(for_delete.length == 0){
      console.log('wrong id to delete your list')
    }else{
      this.saveFile(`id ${list_delete}`,'Deleted')
    }
  }

  complete_to_do_list(list_complete){
    for(let i=0; i<this.to_do_data[0].length; i++){
      if(this.to_do_data[0][i]['id'] == list_complete){
        this.to_do_data[0][i].status = true
      }
    }
    this.saveFile('Complete checklist',`id ${list_complete}`)
  }

  uncomplete_to_do_list(list_uncomplete){
    for(let i=0; i<this.to_do_data[0].length; i++){
      if(this.to_do_data[0][i]['id'] == list_uncomplete){
        this.to_do_data[0][i].status = false
      }
    }
    this.saveFile('Complete unchecklist',`id ${list_uncomplete}`)
  }

}

let model = new Model('data.json')
model.readFile()
module.exports = model
