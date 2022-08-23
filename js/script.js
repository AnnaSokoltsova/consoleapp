
'use strict';

const numberOfFilms = +prompt('How many movies have you seen?', '');
console.log(numberOfFilms);

const personaMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};

const latestMovie = prompt('What is the latest movie you watched?', ''),
      movieRate = prompt('How would you rate it?', ''),
      latestMovieA = prompt('What is the latest movie you watched?', ''),
      movieRateA = prompt('How would you rate it?', '');

let movies = {
    latestMovie: movieRate
};

personaMovieDB.movies[latestMovie] = movieRate;
personaMovieDB.movies[latestMovieA] = movieRateA;


console.log(personaMovieDB);