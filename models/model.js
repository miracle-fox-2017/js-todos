// const Controller = require('../controllers/controller')
const fs         = require('fs')
const parse_data = JSON.parse(fs.readFileSync('data.json'))

class Model{

  static to_do_list(){
    let list_container = ''
    for (var i = 0; i < parse_data.length; i++) {
      if(parse_data[i]['status'] === true){
        list_container += `${parse_data[i]['id']}. [x] ${parse_data[i]['task']}\n`
      }else{
        list_container += `${parse_data[i]['id']}. [ ] ${parse_data[i]['task']}\n`
      }
    }
    return list_container
    // console.log(list_container);
  }

  static add_to_do_list(list_add){
    let last_index = []
    for(let i=0; i<parse_data.length; i++){
      last_index.push(parse_data[parse_data.length-1].id)
    }

    if(parse_data.length === last_index[0]){
      // console.log('masuk <<<<');
      parse_data.push({
        id     : (parse_data.length + 1),
        status : false,
        task   : list_add,
        date   : new Date(),
      })

    }else{
      // console.log('masuk >>>>>');
      parse_data.push({
        id     : last_index[0] + 1,
        status : false,
        task   : list_add,
        date   : new Date(),
      })
    }

    let to_JSON = JSON.stringify(parse_data)
    fs.writeFile('data.json',to_JSON,(err,saved)=>{
     if(err){
      console.log(`list not saved`)
     }else{
      console.log(`=>> Added "${list_add}" to your TO DO List...`)
     }
    })

  }

  static find_to_do_list(list_find){
    let find = ''
    for (var i = 0; i < parse_data.length; i++) {
      if(parse_data[i]['id'] == list_find){
        find += `${parse_data[i]['id']}. ${parse_data[i]['task']}\n`
      }else{
        return `\n=== (FIND LIS) ===\n\nSearched does not exist\n`
      }
    }
    return `\n=== (FIND LIS) ===\n\n${find}`
  }

  static delete_to_do_list(list_delete){
    let for_delete     = parse_data.splice((list_delete-1),1)
    let newJSON        = JSON.stringify(parse_data)

    if(for_delete.length === 0){
      console.log('wrong id to delete your list')
    }else{
      fs.writeFile('data.json',newJSON,(err,deleted)=>{
        if(err){
          console.log('failed to delete your list')
        }else{
          console.log(`Deleted "${for_delete[0]['task']}" from your TO DO list...`)
        }
      })
    }
  }

  static complete_to_do_list(list_complete){
    for(let i=0; i<parse_data.length; i++){
      if(parse_data[i]['id'] == list_complete){
        parse_data[i].status = true
      }
    }

    fs.writeFile('data.json', JSON.stringify(parse_data),(err,deleted)=>{
      if(err){
        console.log('failed to checklist complete your list')
      }else{
        console.log(`Complete checklist from your TO DO list...`)
      }
    })
  }

  static uncomplete_to_do_list(list_uncomplete){
    for(let i=0; i<parse_data.length; i++){
      if(parse_data[i]['id'] == list_uncomplete){
        parse_data[i].status = false
      }
    }

    fs.writeFile('data.json', JSON.stringify(parse_data),(err,deleted)=>{
      if(err){
        console.log('failed to unchecklist complete your list')
      }else{
        console.log(`Complete unchecklist from your TO DO list...`)
      }
    })
  }

}

module.exports = Model
