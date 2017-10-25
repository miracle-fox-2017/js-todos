



class View {
    
    static tampilkanHelp(){
        
        console.log('$ node todo.js list')
        console.log('$ node todo.js add <task_content>')
        console.log('$ node todo.js task <task_id>')
        console.log('$ node todo.js delete <task_id>')
        console.log('$ node todo.js complete <task_id>')
        console.log('$ node todo.js uncomplete <task_id>')
    }

    static tampilkanList(data){
        
        for(var i = 0; i < data.length; i++){
         console.log(data[i].id + ". " + data[i].complete + data[i].task)   
    
        }
    }
    static tampilkanAdd(input){
        console.log(`Added ${input} to your TODO list...`)
    }

    static tampilkanDataPerID(input){
        console.log(input.id + ". " + input.task)
    }
    static deleteData(input){
        console.log(`Deleted ${input} from your TODO list...`)
    }
    static completeCheck(data){
        for(var i = 0; i < data.length; i++){
            console.log(data[i].id + ". " + data[i].complete + data[i].task)   
       
           }
    }
}








module.exports = View