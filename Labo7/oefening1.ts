import { rejects } from "assert/strict";
import { resolve } from "node:path";
import { promises } from "node:stream";

const slowSum = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a+b);
        },1000)
    });
}

const slowMult = (a: number, b: number) => {
    return new Promise<number>((resolve, reject) => {
        setTimeout(() => {
            resolve(a*b);
        },1500)
    });
}

const slowDiv = (a:number, b:number) => {
    return new Promise<number>((resolve,reject) => {
        setTimeout(() => {
            if (b !== 0){
            resolve(a/b);
            }
            else{
            reject("You cannot divide by zero");
            }
        }, 2000);
    })
}

// slowSum(1,5).then((value)=>{
//     console.log(value)
//     slowMult(value,2).then((uitkomst)=>{
//         console.log(uitkomst)
//         slowDiv(uitkomst,2).then((deling)=>{
//             console.log(deling)
//         })
//     })
// })

// slowDiv(6,3).then((value)=>{
//     console.log(value)
// })

slowDiv(3,0).then((value)=>{
    console.log(value)
})
.catch(err =>{
    console.log(err)
})
