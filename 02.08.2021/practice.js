"use strict";

let numberOfFilms;

let lastNameFilm;
let movieRating;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
};

function start () {
    do {
        numberOfFilms = +(prompt("Сколько фильмов вы уже посмотрели?"));
    }
    while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms));

}

function rememberMyFilm() {
    for(let i = 0; i < 2; i++){
        lastNameFilm = prompt('Один из последних просмотренных фильмов?');
        movieRating = +(prompt('На сколько вы оцените ?'));

        if(lastNameFilm == "" || movieRating == "" || 
           lastNameFilm == null || movieRating == null || 
           lastNameFilm.length > 50 || isNaN(movieRating)){
            i--;
            console.log("error");    
        } else {
            personalMovieDB.movies[lastNameFilm] = movieRating;
        }
    }
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Вы просмотрели мало фильмов");    
    } else if (personalMovieDB > 10 && personalMovieDB < 30) {
        alert("Вы классический зритель");
    } else if ( personalMovieDB > 30) {
        alert("Вы киноман");    
    } else {
        alert("Произошла ошибка");
    };
}

function showMyDB() {
    if(!personalMovieDB.privat) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    let genres;
    for(let i = 0; i < 3; i++) {
        genres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        
        if(genres == "" || genres == null) {
            i--;
        } else {
            personalMovieDB.geners.push(genres);
        }
    }
}


start();

rememberMyFilm();

detectPersonalLevel();

showMyDB();

writeYourGenres();


console.log(personalMovieDB);

