const printToConsole = (number: number) : void => console.log(`the result is ${number}`);

let sum = (number: number, numbers: Array<number>) : void => {
    for (let i : number = 0; i < numbers.length;i++){
        number += numbers[i];
    }
    printToConsole(number);
}