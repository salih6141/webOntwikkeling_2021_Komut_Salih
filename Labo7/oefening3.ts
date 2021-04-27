const fetch2 = require('node-fetch')

const dadJokes = async() => {
  for (let i:number = 1; i <= 3; i++){
    let jokes = await fetch('https://icanhazdadjoke.com/search?term=dog&limit=5&page=1', {
      headers: {
        'Accept': 'application/json'
      }
   })
   let alljokes = await jokes.json()
   for (let x:number = 0; x < alljokes.result.length; x++){
     console.log(alljokes.result[x].joke)
   }
  }
}

