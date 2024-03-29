import { title } from "node:process";
import { StringifyOptions } from "node:querystring";

interface Movie {
    title : string
    year : number
    actors: Array<String>
    metascore: number
    imdb: number
    seen : boolean
}

let thematrix: Movie = {
    title: "The Matrix", 
    year: 1999, 
    actors:["Keanu reeves","Laurence Fishburne","Carrie-Anne Moss"], 
    metascore: 73,
    imdb: 9,
    seen: true
}

let myFavoriteMovie: Movie = {
    title: "Deadpool",
    year: 2016,
    actors:["Ryan Reynlods","Ed Skrein","Morena Baccarin","TJ Miller"],
    metascore: 65,
    imdb: 7,
    seen: true
}

let myWorstMovie: Movie = {
    title: "Assassin's Creed",
    year: 2016,
    actors:["Michael Fassbender","Brendan Gleeson","Jeremy Irons","Marion Cotillard"],
    metascore: 36,
    imdb: 3,
    seen:true //spijtig genoeg :(
}

const wasMovieMadeInThe90s = (movie:MovieFromThe90s) => {
    if (movie.year < 2000){
        return true;
    }
    else{
        return false;
    }
}

//console.log(wasMovieMadeInThe90s(thematrix));
//console.log(wasMovieMadeInThe90s(myFavoriteMovie));

const averageMetaScore = (movies:Array<MetaScoreAverage>) => {
    let opgeteldeScore : number = 0;
    for (let i : number = 0; i< movies.length;i++){
         opgeteldeScore += movies[i].metascore;
    }
    return opgeteldeScore/movies.length;
}

const totalImdbScore = (movies: Array<Movie>) => {
    let totaalScore : number = 0;

    for (let i : number = 0; i < movies.length; i++){
        totaalScore += movies[i].imdb;
    }
    return totaalScore;
}

console.log(totalImdbScore([thematrix,myFavoriteMovie,myWorstMovie]));

//console.log(averageMetaScore([thematrix,myFavoriteMovie,myWorstMovie]));

const fakeMetaScore = (movie:FakeMetaCriticScore,newScore:number) => {
    movie.metascore = newScore;
    return movie;
}

//console.log(fakeMetaScore(myWorstMovie,100));

interface MovieFromThe90s{
    year : number
}

interface MetaScoreAverage{
    metascore : number
}

interface imdbScore{
    imdb: number
}

interface FakeMetaCriticScore{
    title : string
    year : number
    actors : Array<String>
    metascore : number
}