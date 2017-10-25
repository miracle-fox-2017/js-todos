const Controller = require('../controllers/controller')
const fs         = require('fs')
const parse_data = JSON.parse(fs.readFileSync('data.json'))

class Model{

  static to_do_list(){
    let list_container = ''
    for (var i = 0; i < parse_data.length; i++) {
      list_container += `${i+1}. ${parse_data[i]['task']}\n`
    }
    return list_container
  }

  static add_to_do_list(list_add){
    // create Id,task & date
    parse_data.push({
      id   : (parse_data.length + 1),
      task : list_add,
      date : new Date(),
    })

    let to_JSON = JSON.stringify(parse_data)
    fs.writeFile('data.json',to_JSON,(err,saved)=>{
      if(err){
        console.log(`list not saved`)
      }else{
        console.log(`=>>\nAdded "${list_add}" to your TODO List...`)
      }
    })
  }

}

module.exports = Model
