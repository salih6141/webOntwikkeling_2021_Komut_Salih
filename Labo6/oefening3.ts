interface Pokemon {
    name: string
    xp: number
    type: string
}

let starterPokemonGen1 : Pokemon[] = [
    {name: 'Bulbasaur', xp: 30, type: 'grass'},
    {name: 'Charmander', xp: 50, type: 'fire'},
    {name: 'Squirtle', xp: 45, type: 'water'}
];
let starterPokemonGen2 : Pokemon[]  = [
    {name: 'Chikorita', xp: 30, type: 'grass'},
    {name: 'Cyndaquil', xp: 50, type: 'fire'},
    {name: 'Totodile', xp: 45, type: 'water'}
];

let starters = [...starterPokemonGen1, ...starterPokemonGen2]

let namen: string[] = starters.map(p=>p.name)
//console.log(namen)

let weakPokemon: Pokemon[] = starters.filter(p=>p.xp<40)
//console.log(weakPokemon)

let weakPokemonNames: string[] = starters.filter(p=>p.xp<40).map(p=>p.name)
//console.log(weakPokemonNames)

let sumOfAllXp: number = starters.reduce((sum,p)=>sum += p.xp,0)
//console.log(sumOfAllXp)

let strongestPokemon: Pokemon = starters.reduce((currentStrongestPokemon, pokemon)=>currentStrongestPokemon.xp>pokemon.xp ? currentStrongestPokemon: pokemon,{name:'', xp:-1000,type:''})
//console.log(strongestPokemon)

let sumOfAllXpOfWeakPokemon = starters
    .filter(p=>p.xp<40)
    .reduce((sum,p)=>sum += p.xp,0)
console.log(sumOfAllXpOfWeakPokemon)