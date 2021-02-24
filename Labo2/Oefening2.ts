enum rainbow{
    red,
    orange,
    yellow,
    green, 
    blue,
    indigo,
    violet
}

let regenboog: Array <string>= [];

for (let b = 0; b < 7; b++){
    regenboog.push(rainbow[b]);
    console.log(regenboog[b]);
}

let laatsteWaarde: string;
while (regenboog.length > 0){
    laatsteWaarde = regenboog.pop();
    console.log(laatsteWaarde);
}