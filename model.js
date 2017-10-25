const fs = require('fs');

class Model{
    constructor(file){
        this.file = file;
    }

    ambilFile(){
        let setFile = JSON.parse(fs.readFileSync(this.file, 'utf-8'));
        return setFile;
    }

    addData(nama){
        let set = this.ambilFile();
        let dataID = set.length;
        let obj = {
            "id": dataID+1,
            "task" : nama.join(' '),
            "complete" : false
        }
        set.push(obj);
        fs.writeFileSync(this.file,JSON.stringify(set), 'utf8', 'w');

    }

    deleteData(nama) {
        let set = this.ambilFile();
        let simpanNama = '';
        let getSet = [];
        let dataID = set.length;
        for (let i = 0; i < dataID;i++){
            if(nama == set[i].id){
                simpanNama = set[i].task;
            }else{
                getSet.push(set[i]);
            }
        }
        
        fs.writeFileSync(this.file, JSON.stringify(getSet), 'utf8', 'w');

        return simpanNama;

    }

    completeData(nama) {
        let set = this.ambilFile();
        let dataID = set.length;
        for (let i = 0; i < dataID; i++) {
            if (nama == set[i].id) {
                set[i].complete = true;
            } 
        }
        fs.writeFileSync(this.file, JSON.stringify(set), 'utf8', 'w');
    }

    uncompleteData(nama) {
        let set = this.ambilFile();
        let dataID = set.length;
        for (let i = 0; i < dataID; i++) {
            if (nama == set[i].id) {
                set[i].complete = false;
            }
        }
        fs.writeFileSync(this.file, JSON.stringify(set), 'utf8', 'w');
    }

}

module.exports = Model;