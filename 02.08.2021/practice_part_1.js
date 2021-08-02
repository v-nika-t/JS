 "use strict";

var numberOfFilms = Number(prompt("Сколько фильмов вы уже посмотрели?"));
// var numberOfFilms = +(prompt("Сколько фильмов вы уже посмотрели?"));

const personalMovieDB= {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
};

var i = 0;
while (i < 2){

  var lastNameFilm = prompt('Один из последних просмотренных фильмов?');
  var movieRating = Number(prompt('На сколько оцените его?'));
  personalMovieDB.movies[lastNameFilm] = movieRating;
  //используем квадратные скобки, а не точку, в некоторых браузерах может н еработать, а также не будет проблемы , если пользователь введет в браузер, какую то аброкадабра  через пробле
  
  i++;
}

console.log(personalMovieDB);



