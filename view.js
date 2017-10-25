
class View{
  static list(data){
    for(let i = 0; i < data.length;i++){
      let a = ''
      for(let key in data[i]){
        a+=data[i][key]+' '
      }
      console.log(a)
    }
  }

  static help(){
    console.log('help')
    console.log('list')
    console.log('add <task_content>')
    console.log('task <task_id>')
    console.log('delete <task_id>')
    console.log('complete <task_id>')
    console.log('uncomplete <task_id>')
  }

  static add(tex_content){
    console.log('added '+tex_content+' to your TODO list...')
  }

  static find(data,id){
    for(let i = 0; i < data.length; i++){
      if(data[i].id == id){
        console.log(data[i].id+' '+data[i].task)
      }
    }
  }

  static deleteList(data,numid){
    console.log('deleted '+data[numid].task+' from your TODO list.....')
  }

}
module.exports = View
