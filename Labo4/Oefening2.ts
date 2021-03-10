import { title } from "node:process";
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
    seen:true //spijtig genoeg :(
}

const wasMovieMadeInThe90s = (movie:Movie) => {
    if (movie.year < 2000){
        return true;
    }
    else{
        return false;
    }
}

//console.log(wasMovieMadeInThe90s(thematrix));
//console.log(wasMovieMadeInThe90s(myFavoriteMovie));

const averageMetaScore = (movies:Array<Movie>) => {
    let opgeteldeScore : number = 0;
    for (let i : number = 0; i< movies.length;i++){
         opgeteldeScore += movies[i].metascore;
    }
    return opgeteldeScore/movies.length;
}

//console.log(averageMetaScore([thematrix,myFavoriteMovie,myWorstMovie]));

const fakeMetaScore = (movie:Movie,newScore:number) => {
    movie.metascore = newScore;
    return movie;
}

//console.log(fakeMetaScore(myWorstMovie,100));

interface MovieFromThe90s{
    year : number
}

interface MetaScoreAverage{
    metaScore : number
}

interface FakeMetaCriticScore{
    title : string
    year : number
    actors : []
    metaScore : number
}