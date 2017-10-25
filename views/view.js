class View {
  static listCommand (){
    console.log('[1] help' + '\n' +
                '[2] list' + '\n' +
                '[3] add <task_content>' + '\n' +
                '[4] task <task_id>' + '\n' +
                '[5] delete <task_id>' + '\n' +
                '[6] complet <task_id>' + '\n' +
                '[7] uncomplete <task_id>' + '\n' +
                'Pilih Perintah <No>')
  }
  static list (data) {
    console.log('berikut adalah list todo nya :')

    for (var i = 0; i < data.length; i++){
      if(data[i].complete == true){
        console.log(`${data[i].id}. [x] ${data[i].task}`)
      }else{
      console.log(`${data[i].id}. [ ] ${data[i].task} `)
      }
    };
  }
  static succes (task){
    console.log('Berhasil menambahkan List baru: ' + task);

  }
  static findId (task){
    console.log(`${task.id}. ${task.task} `);
  }
  static deleteList (deletedId){
    console.log(`Satu Item Terhapus`);
  }
  static complete (task){
    console.log('Berhasil menambahkan List baru: ' + task);

  }
}

module.exports = View;
