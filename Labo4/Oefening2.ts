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