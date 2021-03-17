const printToConsole = (number: number) : void => console.log(`the result is ${number}`);

let sum = (numbers: Array<number>) : void => {
    let number : number = 0;
    for (let i : number = 0; i < numbers.length;i++){
        number += numbers[i];
    }
    printToConsole(number);
}

sum([1,2,2,5,10]);