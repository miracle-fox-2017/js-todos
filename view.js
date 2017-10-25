class View{
  constructor(){}
  
  static showHelp(){
    let helpMsg = '';
    helpMsg += 'node todo.js\n';
    helpMsg += 'node todo.js help\n';
    helpMsg += 'node todo.js list\n';
    helpMsg += 'node todo.js add <task_content>\n';
    helpMsg += 'node todo.js find <task_id>\n';
    helpMsg += 'node todo.js delete <task_id>\n';
    helpMsg += 'node todo.js complete <task_id>\n';
    helpMsg += 'node todo.js uncomplete <task_id>\n';
    helpMsg += 'node todo.js list:created asc | dsc\n';
    helpMsg += 'node todo.js list:completed asc | dsc\n';
    helpMsg += 'node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_n>\n';
    helpMsg += 'node todo.js filter:<tag_name>';
    console.log(helpMsg);
  }
  
  static showList(data){
    let listMsg = '';
    let status;
    if(data.length>0){
      for(let i = 0; i<data.length; i++){
        if(data[i].status){
          status = 'x';
        } else {
          status = ' ';
        }
        listMsg += `${data[i].id}. [${status}] ${data[i].task}`;
        
        //only enter if not the end
        if(i<data.length-1){
          listMsg += '\n';
        }
        
      }
      console.log(listMsg);
    } else {
      console.log('data 0 result');
    }
  }
  
  static showAddMsg(task){
    let addMsg = `Added "${task}" to your TODO list...`;
    console.log(addMsg);
  }
  
  static deleteMsg(task){
    console.log(`Deleted "${task.task}" from your TODO list...`);
  }
  
  static completeMsg(task){
    console.log(`Updated "${task.task}" completed from your TODO list...`);
  }
  
  static uncompleteMsg(task){
    console.log(`Updated "${task.task}" UNcompleted from your TODO list...`);
  }
  
  static showListC(data){
    let listMsg = '';
    let status;
    if(data.length>0){
      for(let i = 0; i<data.length; i++){
        if(data[i].status){
          status = 'x';
        } else {
          status = ' ';
        }
        listMsg += `${data[i].id}. [${status}] ${data[i].task} | created_date: ${data[i].created_date}`;
        
        //only enter if not the end
        if(i<data.length-1){
          listMsg += '\n';
        }
        
      }
      console.log(listMsg);
    } else {
      console.log('data 0 result');
    }
  }
  
  static showTagged(tagged){
    console.log(`Tagged task "${tagged.task}" with tags: ${tagged.tag.join(', ')}`);
    
  }
  
  static filtered(data){
    for(let i = 0; i<data.length; i++){
      console.log(`${data[i].id}. ${data[i].task} [${data[i].tag.join(', ')}]`);
    }
  }
  
  static err(){
    console.log('something wrong');
  }
  
}

module.exports = View;