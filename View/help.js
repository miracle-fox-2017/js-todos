

class Print {
  static helper(){
      console.log('list');
      console.log('node todo.js add <task_content>');
      console.log('node todo.js task <task_id>');
      console.log('node todo.js delete <task_id>');
      console.log('node todo.js complete <task_id>');
      console.log('node todo.js uncomplete <task_id>');
      console.log('node todo.js list:created asc | desc');
      console.log('node todo.js list:complete asc | desc');
      console.log('node todo.js tag <task_id> <tag_name1> <tag_name2> ....<tag_name_N> ');
      console.log('node todo.js filter:<tag_name>');
    }
  static detailList (){
      console.log(`====== Opps Data list tidak ada========`);
      console.log(`============== Menu Help ================`);
      console.log(this.helper());

  }

  static list (complete,idList,todolist){
      // for(let i = 0; i< dataList.length;i++){
        console.log(`${idList}. ${complete} ${todolist}` );
    // }
  }

  static add (value){
    console.log(`Added '${value}' to your TODO list .....` );
  }

  static find(cariId,cariValue){
    console.log(`${cariId} '${cariValue}'  your TODO list .....` );
  }

  static hapus(id){
    console.log(`Deleted ${id} to your TODO list .....` );
  }
  static printTag(todo,tagName){
    console.log(`Tagged task '${todo}' with tags: ${tagName}`);
  }
  static printFilter(id,todolist,argvArr){
      console.log(`${id}. ${todolist} [${argvArr}]`);
  }
  static erorNoInput(){
    console.log(`Opps Silahkan Masukan <task_id> Atau Melihat Bantuan Dibawah Ini`);
  }

}

module.exports = Print;
