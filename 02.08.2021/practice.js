"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: true,
    start: function () {
        do {
            this.count = +(prompt("Сколько фильмов вы уже посмотрели?"));
        }
        while(this.count == "" || this.count == null || isNaN(this.count));
    
    },
    rememberMyFilm: function () {
        let lastNameFilm;
        let movieRating;
        for(let i = 0; i < 2; i++){
            lastNameFilm = prompt('Один из последних просмотренных фильмов?');
            movieRating = +(prompt('На сколько вы оцените ?'));
    
            if(lastNameFilm == "" || movieRating == "" || 
               lastNameFilm == null || movieRating == null || 
               lastNameFilm.length > 50 || isNaN(movieRating)){
                i--;
                console.log("error");    
            } else {
                this.movies[lastNameFilm] = movieRating;
            }
        }
    },
    detectPersonalLevel: function () {
        if (this.count < 10) {
            alert("Вы просмотрели мало фильмов");    
        } else if (this.count > 10 && this.count < 30) {
            alert("Вы классический зритель");
        } else if (this.count > 30) {
            alert("Вы киноман");    
        } else {
            alert("Произошла ошибка");
        };
    },
    
    showMyDB: function () {
        if(!this.privat) {
            console.log(personalMovieDB);
        }
    },
    
    writeYourGenres: function () {
        let genres;
        for(let i = 0; i < 3; i++) {
            genres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            
            if(genres == "" || genres == null) {
                i--;
            } else {
                this.geners.push(genres);
            }
        }
        this.geners.forEach((iteam, i) => {
            console.log(`Любимый жанр под номером ${i + 1} - это ${iteam} `);
        });
    },
    toggleVisibleMyDB: function () {
        if(this.privat) {
            this.privat = false;
        } else {
            this.privat = true;
        }
    }

};



personalMovieDB.start();

personalMovieDB.rememberMyFilm();

personalMovieDB.detectPersonalLevel(); 

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(); 

personalMovieDB.writeYourGenres();





