let veelVouden: Array<number> = [];

for (let i = 0; i<70+1; i++){
    if (i % 7 ==0 ){
        veelVouden.push(i);
    }
}

/*for (let i = 0; i< veelVouden.length+1; i++){
    if (veelVouden[i] % 5 == 0 || veelVouden[i]%3 == 0){
        console.log(veelVouden[i]);
    }
}*/

for (let i = 0; i< veelVouden.length+1; i++){
    (veelVouden[i]%5==0 || veelVouden[i]%3==0 ? console.log(veelVouden[i]): '');
}