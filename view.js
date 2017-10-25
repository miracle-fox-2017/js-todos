
class View {
  static help(){
    console.log('$ node todo.js');
    console.log('$ node todo.js help');
    console.log('$ node todo.js list');
    console.log('$ node todo.js add <task_content>');
    console.log('$ node todo.js task <task_id>');
    console.log('$ node todo.js delete <task_id>');
    console.log('$ node todo.js complete <task_id>');
    console.log('$ node todo.js uncomplete <task_id>');
  }

  static list(data){
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
      if(data[i].com == true){
      console.log(data[i].id +'[x]'+'. '+ data[i].task);
      }
      else {
        console.log(data[i].id +'[ ]'+'. '+ data[i].task);
      }
    }
  }

  static add(data){
    console.log(`${data} sudah ditambahkan`);
  }

  static find(data){
    console.log(`data yang anda cari adalah :${data}`);
  }
  static delete(data){
    console.log(`si kampret : ${data} :udah ilang`);
  }
}
module.exports = View;
