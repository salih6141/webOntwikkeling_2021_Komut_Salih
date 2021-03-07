enum color{
    "Red",
    "Green",
    "Blue"
}

function multiplyTextColor(amount:number,a:color,text?:string,appendix?:string){
    const chalk = require('chalk');
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
    switch(a){
        case color.Red:
            console.log(chalk.red(zin));
            break;
        case color.Green:
            console.log(chalk.blue(zin));
            break;
        case color.Blue:
            console.log(chalk.blue(zin));
            break;
    }
}
multiplyTextColor(3,color.Blue,"hallo","!");
