function multiplyText(amount:number,text?:string,appendix?:string){
    let zin: String;
    if(text == undefined){
        text = "Default"
    }
    for(let i:number=0; i<=amount; i++){
       zin += text + " ";
    }
    if(appendix != undefined){
        zin += appendix;
    }
    return zin;
}

console.log(multiplyText(3,"hallo","!"));