interface Calculation{(a:number, b:number):number}

const add:Calculation = (a:number,b:number) :number => {return (a+b)}
const multi:Calculation = (a:number,b:number) :number => {return (a*b)}

let printCalculationResult = (a:number,b:number,functieAdd:Calculation,functieMult:Calculation) => {
    console.log(functieAdd(a,b),functieMult(a,b))
}

printCalculationResult(2,4,add,multi)