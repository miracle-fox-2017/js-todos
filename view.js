class View {
    static cetakFile(data){
        for (let i = 0; i < data.length;i++){
            if (data[i].complete === true){
                console.log(`${data[i].id}. [x] ${data[i].task}`);
            } else{
                console.log(`${data[i].id}. [ ] ${data[i].task}`);
            }
        }
    }
    static cetakFind(data) {
            console.log(`${data.id}. ${data.task}`);
    }
    static help() {
        console.log('help');
        console.log('list');
        console.log('add <task_content>');
        console.log('find <task_id>');
        console.log('delete <task_id>');
        console.log('complete <task_id>');
        console.log('uncomplete <task_id>');
    }
    static addFile(data){
        console.log(`Added "${data.join(' ')}" to your TODO list...`);
    }
    static deleteFile(data) {
        console.log(`Deleted "${data}" to your TODO list...`);
    }
    static error() {
        console.log('501');
    }
}

module.exports = View;