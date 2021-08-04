"use strict";

var numberOfFilms = +(prompt("Сколько фильмов вы уже посмотрели?"));

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
};

let i = 0;
let lastNameFilm;
let movieRating;

do{
    lastNameFilm = prompt('Один из последних просмотренных фильмов?');
    movieRating = +(prompt('На сколько вы оцените ?'));

    if (lastNameFilm !== null && lastNameFilm !== "" &&  lastNameFilm.length > 50 ){
        lastNameFilm = false;
    };
    
    if (movieRating !== null && movieRating !== "" &&  movieRating.length > 50 ){
      movieRating = false;
  };


    switch (lastNameFilm && movieRating) {
        case null:
            alert("Вы нажали отмена");
            break;
        case "":
            alert("Вы не ввели значение");
              break;
        case false:
            alert("Вы ввели значеие > 50");
            break;
        default:
          personalMovieDB.movies[lastNameFilm] = movieRating;
          i++;
    };
}
while (i < 2 );

if (personalMovieDB.count < 10) {
    alert("Вы просмотрели мало фильмов");    
} else if (personalMovieDB > 10 && personalMovieDB < 30) {
    alert("Вы классический зритель");
} else if ( personalMovieDB > 30) {
    alert("Вы киноман");    
} else {
    alert("Произошла ошибка");
};

console.log(personalMovieDB);
