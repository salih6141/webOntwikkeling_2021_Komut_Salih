import { StringifyOptions } from "node:querystring";

interface Movie {
    title : string
    year : number
    actors: Array<String>
    metascore: number
    seen : boolean
}

let thematrix: Movie = {
    title: "The Matrix", 
    year: 1999, 
    actors:["Keanu reeves","Laurence Fishburne","Carrie-Anne Moss"], 
    metascore: 73,
    seen: true
}

let myFavoriteMovie: Movie = {
    title: "Deadpool",
    year: 2016,
    actors:["Ryan Reynlods","Ed Skrein","Morena Baccarin","TJ Miller"],
    metascore: 65,
    seen: true
}

let myWorstMovie: Movie = {
    title: "Assassin's Creed",
    year: 2016,
    actors:["Michael Fassbender","Brendan Gleeson","Jeremy Irons","Marion Cotillard"],
    metascore: 36,
    seen:true //spijtig genoeg :)
}