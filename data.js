let fs = require('fs')
class Data{
  static bacaFile(){

    let data = JSON.parse(fs.readFileSync('data.json','utf-8').trim().split('\n'))
    return data
  }
  static add(content){
    let data = Data.bacaFile()
    let obj = {id:data.length+1,task:content}
    data.push(obj)
    let a = JSON.stringify(data)
    fs.writeFileSync('data.json',a)
  }
  static deleteList(numid){
    let data = Data.bacaFile()
    for(let i = 0; i < data.length;i++){
      for(let key in data[i]){
        if(data[i][key]==numid){
          data.splice(numid-1,1)
        }
        if(data[i].id>numid){
          data[i].id=data[i].id-1
        }
      }
    }
    let a = JSON.stringify(data)
    fs.writeFileSync('data.json',a)
  }
}

//console.log(Data.bacaFile('data.json'))



module.exports = Data
//console.log(a)
