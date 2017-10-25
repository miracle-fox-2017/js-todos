const Model = require('./model');
const View = require('./view');

class Todo {
    // static panggilData(data) {
    //     View.cetakFile(data);
    // }
    // static panggilHelp() {
    //     View.help();
    // }

    static taskArgv(get){
        if (get[0] === 'help') {
            View.help();
        } else if (get[0] === 'list') {
            let model = new Model('data.json');
            View.cetakFile(model.ambilFile());
        } else if (get[0] === 'add') {
            let model = new Model('data.json');
            model.addData(get.slice(1));
            View.addFile(get.slice(1));
        } else if (get[0] === 'find') {
            let model = new Model('data.json');
            let setFind = model.ambilFile();
            for (let i = 0; i < setFind.length;i++){
                if (get[1] == setFind[i].id){
                    View.cetakFind(setFind[i]);
                }
            }
        } else if (get[0] === 'delete') {
            let model = new Model('data.json');
            View.deleteFile(model.deleteData(get[1]));
        } else if (get[0] === 'complete') {
            let model = new Model('data.json');
            model.completeData(get[1]);
        } else if (get[0] === 'uncomplete') {
            let model = new Model('data.json');
            model.uncompleteData(get[1]);
        } else {
            View.error();
        }
    }

}

let talkPerintah = process.argv.slice(2);

Todo.taskArgv(talkPerintah);

// let hasil = Todo.panggilData(model.ambilFile());