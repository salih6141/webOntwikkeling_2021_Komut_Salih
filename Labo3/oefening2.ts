function reverseString(str:string){
    let newString: String ="";

    for(let i: number=str.length; i>=0; i--){
        newString += str[i];
    }
    return newString;
}

console.log(reverseString("hello"))