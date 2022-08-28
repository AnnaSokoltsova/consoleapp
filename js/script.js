
'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('How many movies have you seen?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How many movies have you seen?', '');
    }
}
start();

const personaMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {

    },
    genres: [],
    privat: false
};



function detectPersonalLevel() {
    if (personaMovieDB.count < 10 ) {
        alert('You have watched not many movies');
    } else if (personaMovieDB.count >= 10 && personaMovieDB.count < 30) {
        alert('Your are a classical watcher');
    } else if (personaMovieDB.count >= 30 ) {
        alert('You are a movie enjoyer');
    } else {
        alert('An error');
    }
}
detectPersonalLevel();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const yourGenre = prompt(`What is your favourite genre under ${i} number?`, '');
        if (yourGenre != null) {
            personaMovieDB.genres[i - 1] = yourGenre;
        } else {
            console.log('onemoreError');
            i--;
        }
    }

}

writeYourGenres();

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const latestMovie = prompt('What is the latest movie you watched?', '');
        const movieRate = prompt('How would you rate it?', '');
        
        if (latestMovie != null && movieRate != null && latestMovie != "" && movieRate != "" && latestMovie.length < 50) {
            personaMovieDB.movies[latestMovie] = movieRate; 
        } else {
            console.log('error');
            i--;
        }
    }
}

rememberMyFilms();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personaMovieDB);
        console.log('yay');
    }
}

showMyDB(personaMovieDB.privat);

