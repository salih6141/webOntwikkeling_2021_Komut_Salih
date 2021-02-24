let getallen: Array<number> = [];

for (let i = 1; i<101; i++){
    getallen.push(i);
}

for (let i = 0; i<100;i++){
    if (getallen[i]%3==0 && getallen[i]%5==0){
        console.log("FizzBuzz")
    }
    else if (getallen[i]%3==0){
        console.log("Fizz");
    }
    else if (getallen[i]%5==0){
        console.log("Buzz");
    }
    
    else{
        console.log(getallen[i])
    }
}

