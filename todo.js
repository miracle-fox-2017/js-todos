const view = require('./view')
const model = require('./model')
let dataBase = new model()

class Todo{
    constructor(){
        this.input = process.argv.slice(2,5)
    }

    process(){
        // console.log(this.input)
        if(this.input[0] == "help"){
            view.tampilkanHelp()
        }
        else if(this.input[0] == 'list'){
            let data = dataBase.lemparData()
            view.tampilkanList(data)
        }
        else if(this.input[0] == 'add'){
            var newData = this.input.slice(1,this.input.length).join(" ");
            
            let add = dataBase.addData(newData)
            view.tampilkanAdd(newData)
            
            
        }
        else if(this.input[0] == 'task'){
            var IDnum = this.input[1]
            let found = dataBase.findData(IDnum)
            view.tampilkanDataPerID(found)
        }
        
        else if(this.input[0] == 'delete'){
            var IDnum = this.input[1]
            let del = dataBase.deleteData(IDnum)
            view.deleteData(del)
        }
        else if(this.input[0] == 'complete'){
            var IDnum = this.input[1]
            let check = dataBase.completeCheck(IDnum)
            view.completeCheck(check)
        }
        else if(this.input[0] == "uncomplete"){
            var IDnum = this.input[1]
            let check = dataBase.uncompleteCheck(IDnum)
            view.completeCheck(check)
        }
        
    }
}


var list = new Todo()

list.process()

// console.log(dataBase.lemparData())

module.exports = Todo
