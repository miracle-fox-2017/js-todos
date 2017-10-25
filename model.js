let fs = require('fs')
// const todo = require('todo')
class Model{
    constructor(input){
        this.data = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
        this.input = input
    }
    
    lemparData(){
        return this.data
    }

    addData(input){
        
        var newObj = {
            'id' : 0,
            'complete' : '[ ] ',
            'task': input
        }

        this.data.push(newObj)

        for(var i = 0; i < this.data.length;i++){
            if(this.data[i].id == 0){
                this.data[i].id = i+1
            }
        }
        var stringify = JSON.stringify(this.data)
        fs.writeFileSync('data.json',stringify)
        
        return this.data
    }
    findData(IDnum){
        for(var i = 0; i < this.data.length;i++){
            if(this.data[i].id == IDnum){
                return this.data[i]
            }
        }
    }
    deleteData(idNum){
        let taskDeleted = ""
        
        for(var i = 0; i < this.data.length;i++){
            if(this.data[i].id == idNum){
                taskDeleted = this.data[i].task
                this.data.splice(i,1)
                
            }
        }
        for(var j = 0; j < this.data.length;j++){
            if(this.data[j].id !== j+1){
                this.data[j].id = j+1
            }
        }
        var stringify = JSON.stringify(this.data)
        fs.writeFileSync('data.json',stringify)
        return taskDeleted
    }
    completeCheck(idNum){
        for(var i = 0; i < this.data.length;i++){
            if(this.data[i].id == idNum){
                this.data[i].complete = "[ ] "
                this.data[i].complete = "[x] "
            }
            
        }    
            var stringify = JSON.stringify(this.data)
            fs.writeFileSync('data.json',stringify)
            return this.data
    }
    uncompleteCheck(idNum){
        for(var i = 0; i < this.data.length;i++){
            if(this.data[i].id == idNum){
                this.data[i].complete = "[ ] "
            }
        }
        var stringify = JSON.stringify(this.data)
        fs.writeFileSync('data.json',stringify)
        return this.data        
    }


}
let dataBase = new Model



// console.log(dataBase.addData())




// dataBase.lemparData()




module.exports = Model


