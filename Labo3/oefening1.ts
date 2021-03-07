let items: number[] = [2,5,3,7,8,10,15,18,24,111,12,19,87];


function zoekGetal(arr_items:number[],n){
     for(let i: number = 0; i<arr_items.length;i++){
         if(arr_items[i]===n){
             console.log("Het getal "+ n + " heeft de index "+ i);
         }
     }
}

console.log(zoekGetal(items,12));

