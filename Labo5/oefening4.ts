let calculateDogAge = (age:number):number => {return calculateAnimalAge(age,7)}

let calculateAnimalAge = (ageAnimal:number, ageConverter:number) :number=>{
    return ageAnimal * ageConverter
}

let calculateAnimalAgeFunctional = (ageConverter:number) =>{
    return (age:number) => {return calculateAnimalAge(age, ageConverter)}
}
const calculateHamsterAge = calculateAnimalAgeFunctional(26)

console.log(calculateHamsterAge(.5))