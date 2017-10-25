const fs=require("fs");

class Process{
    constructor(){
        this.fileName=null;
        this.tampungData=null;
    }
    readJsonFile(file){
        const getDataJson=JSON.parse(fs.readFileSync(file,"utf-8"));
        this.tampungData=getDataJson;
        this.fileName=file;
        return getDataJson;
    }
    addData(data){ // Tanbah Data
        let obj={};
        const previousLength=this.tampungData.length;
        const lastData=previousLength === 0 ? {id:0} : this.tampungData[previousLength - 1];
        const newIdIncreament=lastData.id + 1;
        obj["id"]=newIdIncreament;
        obj["task"]=data.join(" ");
        obj["status"]=false;
        this.tampungData.push(obj);
        fs.writeFileSync(this.fileName,JSON.stringify(this.tampungData));
    }
    getTask(id){ // Get Task based on input ID
        const idInt=parseInt(id);
        for(let i=0;i < this.tampungData.length;i++){
            if(this.tampungData[i].id === idInt){
                return this.tampungData[i];
            }else if(i === this.tampungData.length - 1 && this.tampungData[i].id !== idInt){
                return false;
            }
        }
    }
    delete(id){ // Delete data based on input ID
        const idInt=parseInt(id);
        for(let i=0;i < this.tampungData.length;i++){
            if(this.tampungData[i].id === idInt){
                this.tampungData.splice(i,1);
                fs.writeFileSync(this.fileName,JSON.stringify(this.tampungData));
                return true;
            }else if(i === this.tampungData.length - 1 && this.tampungData[i].id !== idInt){
                return false;
            }
        }
    }
    setComplete(id){ // Set Complete based on input ID
        const idInt=parseInt(id);
        for(let i=0;i < this.tampungData.length;i++){
            if(this.tampungData[i].id === idInt){
                this.tampungData[i].status=true;
                fs.writeFileSync(this.fileName,JSON.stringify(this.tampungData));
                return this.tampungData;
            }else if(i === this.tampungData.length - 1 && this.tampungData[i].id !== idInt){
                return false;
            }
        }
    }
    setUncomplete(id){ // Set Uncomplete based on input ID
        const idInt=parseInt(id);
        for(let i=0;i < this.tampungData.length;i++){
            if(this.tampungData[i].id === idInt){
                this.tampungData[i].status=false;
                fs.writeFileSync(this.fileName,JSON.stringify(this.tampungData));
                return this.tampungData;
            }else if(i === this.tampungData.length - 1 && this.tampungData[i].id !== idInt){
                return false;
            }
        }
    }
}

module.exports=Process;
