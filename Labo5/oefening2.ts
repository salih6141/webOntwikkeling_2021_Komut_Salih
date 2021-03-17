const printToConsole:ConsolePrinter = (number) : void => console.log(`the result is ${number}`)

interface ConsolePrinter {
    (number: number):void
}

let sum = (numbers: Array<number>,printfunctie:ConsolePrinter,functie2:ConsolePrinter) => {
    let totaal : number = 0;
    for (let i : number = 0; i < numbers.length;i++){
        totaal += numbers[i]
    }
    if (totaal <= 10){
        functie2(totaal)
    }
    else{
        printfunctie(totaal)
    }
}

sum([1,2,3,4],printToConsole, number => console.log(`the result ${number} is a very small number`));

