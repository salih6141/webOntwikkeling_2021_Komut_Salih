let names: string[] = ['joske', 'franske', 'donald', 'achmed']

let capitalNames1: string[] = []
names.forEach(e=>{capitalNames1.push(e.toUpperCase())})
//console.log(capitalNames1)

let capitalNames2: string[] = names.map(e=>e.toUpperCase())
console.log(capitalNames2)