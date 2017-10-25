const fs = require('fs');

class Model{
  constructor(){
    
  }
  
  static readFile(file){
    let data = fs.readFileSync(file, 'utf-8');
    //parse
    let parsed = JSON.parse(data);
    // let stringyfy = JSON.stringify(data);
    return parsed;
  }
  
  static addTask(task, file){
    let myData = this.readFile(file);
    // console.log(task);
    myData.push(new Data(myData.length+1, task))
    
    //stringify
    let string = JSON.stringify(myData);    
    fs.writeFileSync(file, string);
  }
  
  static deleteTask(id, file){
    let myData = this.readFile(file);
    //loop cari 
    let pos = 0;
    for(let i =0; i<myData.length; i++){
      if(myData[i].id==id){
        pos = i;
      }
    }
    if(pos<myData.length-1){
      //splice
      myData.splice(pos,1);
      
      //edit id
      for(let j = pos; j<myData.length; j++){
        myData[j].id = myData[j].id -1;
      }
    } else {
      myData.splice(pos,1);
    }
    
    //stringify
    let string = JSON.stringify(myData);  
    
    //write file
    fs.writeFileSync(file, string)
  }
  
  static completeTask(id, file){
    let myData = this.readFile(file);
    
    //looping mencari id dan rubah status jadi true
    for(let i = 0; i<myData.length; i++){
      if(myData[i].id == id){
        myData[i].status = true;
      }
    }
    
    //stringify
    let string = JSON.stringify(myData);  
    
    //write file
    fs.writeFileSync(file, string)
    
  }

  static uncompleteTask(id, file){
    let myData = this.readFile(file);
    
    //looping mencari id dan rubah status jadi true
    for(let i = 0; i<myData.length; i++){
      if(myData[i].id == id){
        myData[i].status = false;
      }
    }
    
    //stringify
    let string = JSON.stringify(myData);  
    
    //write file
    fs.writeFileSync(file, string)
    
  }
  
  static sortCreated(status, file){
    let myData = this.readFile(file);
    let sorted;
    if(status =='asc'){
      sorted = myData.sort(function(a, b){
        return new Date(a.created_date)-new Date(b.created_date)
      })
    } else {
      sorted = myData.sort(function(a, b){
        return new Date(b.created_date)-new Date(a.created_date)
      })
    }
    
    return sorted;
  }
  
  // static selectionSortAsc(arrays){
  //     // Your sorting code
  //     //selection sort, ambil yang terkecil, tampung di tempat yang baru
  //     var pointer = 0;
  //     var kecil = 0;
  //     var besar = 0;
  //     var sorted = [];
  //     var loops = arrays.length;
  //     while(loops>1){
  //       //cari yang kecil
  //       if(arrays.length>2){
  //         kecil = arrays[0];
  //         for(var i = 0; i<arrays.length; i++){
  //           if(kecil>arrays[i].created_date){
  //             kecil = arrays[i];
  //             pointer = i;
  //           }
  //         }
  // 
  //       //push ke tempat baru
  //       // console.log(kecil);
  //       sorted.push(kecil);
  // 
  //       } else {
  //         console.log(new Date(arrays[0].created_date) > new Date(arrays[1].created_date));
  //         console.log(arrays[1].created_date);
  //         if(arrays[0].created_date>arrays[1].created_date){
  //           kecil = arrays[1];
  //           besar = arrays[0];
  //         } else {
  //           kecil = arrays[0];
  //           besar = arrays[1];
  //         }
  //         // console.log(kecil);
  //         // console.log(besar);
  //         sorted.push(kecil);
  //         sorted.push(besar);
  //         break;
  //       }
  // 
  //       //hapus yang terkecil dari array
  //       arrays.splice(pointer,1);
  //       pointer = 0;
  // 
  //       loops -= 1;
  // 
  //     }
  // 
  //     return sorted;
  // 
  // }
  // 
  // static selectionSortDsc(arrays){
  //     // Your sorting code
  //     //selection sort, ambil yang terkecil, tampung di tempat yang baru
  //     var pointer = 0;
  //     var kecil = 0;
  //     var besar = 0;
  //     var sorted = [];
  //     var loops = arrays.length;
  //     while(loops>1){
  //       //cari yang kecil
  //       if(arrays.length>2){
  //         kecil = arrays[0];
  //         for(var i = 0; i<arrays.length; i++){
  //           if(kecil<arrays[i].created_date){
  //             kecil = arrays[i];
  //             pointer = i;
  //           }
  //         }
  // 
  //       //push ke tempat baru
  //       // console.log(kecil);
  //       sorted.push(kecil);
  // 
  //       } else {
  //         if(arrays[0].created_date<arrays[1].created_date){
  //           kecil = arrays[1];
  //           besar = arrays[0];
  //         } else {
  //           kecil = arrays[0];
  //           besar = arrays[1];
  //         }
  //         sorted.push(kecil);
  //         sorted.push(besar);
  //         break;
  //       }
  // 
  //       //hapus yang terkecil dari array
  //       arrays.splice(pointer,1);
  //       pointer = 0;
  // 
  //       loops -= 1;
  // 
  //     }
  // 
  //     return sorted;
  // 
  // }
  // 
  
  static completed(status, file){
    let myData = this.readFile(file);
    let complete = [];
    
    //looping dapetin yang complete
    for(let i = 0; i<myData.length; i++){
      if(myData[i].status){
        complete.push(myData[i])
      }
    }
    
    let sorted;
    if(status =='asc'){
      sorted = complete.sort(function(a, b){
        return new Date(a.created_date)-new Date(b.created_date)
      })
    } else {
      sorted = complete.sort(function(a, b){
        return new Date(b.created_date)-new Date(a.created_date)
      })
    }
        
    return sorted;
  }
  
  static tag(id, tag, file){
    let myData = this.readFile(file);
    let task;
    // console.log(myData);
    //cari data by id
    for(let i = 0;i<myData.length;i++){
      if(myData[i].id == id){
        //looping tag
        for(let j=0;j<tag.length;j++){
          myData[i].tag.push(tag[j]);
        }
          task = myData[i];
      }
    }
    // console.log(myData);
    //stringify
    let string = JSON.stringify(myData);  
    
    //write file
    fs.writeFileSync(file, string);
    
    return task;
  }
  
  static filterTag(tag, file){
    let myData = this.readFile(file);
    // console.log('sekarang di model');
    let result = [];
    
    //loop data yang ada filternya di push
    for(let i = 0; i<myData.length; i++){
      for(let j = 0; j<myData[i].tag.length; j++){
        if(tag == myData[i].tag[j]){
          result.push(myData[i]);
        }
      }
    }
    
    // console.log(result);
    return result;
  }
  
}

class Data{
  constructor(id, task){
    this.id = id;
    this.task = task;
    this.status = false;
    this.created_date = new Date(Date.now());
    this.tag = [];
  }
}

module.exports = Model;