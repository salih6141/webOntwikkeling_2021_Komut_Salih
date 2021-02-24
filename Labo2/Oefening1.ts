let getallen: Array<number> = [];
let getal: number = 0;


for (let i = 100; i <= 200; i++){
 getallen.push(i);
}

while (getal < 100){
    console.log(getallen[getal])
    getal++;
}

for (let i = 0; i < 100; i++){
    let nummer: number = getallen[i];
    if (nummer % 3 == 0){
        console.log(nummer);
    }
}


