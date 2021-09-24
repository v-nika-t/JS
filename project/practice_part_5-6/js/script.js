'use strict';

const movieDB = {
    movies: [
        "логан",
        "лига справедливости",
        "ла-ла лэнд",
        "одержимость",
        "скотт пилигрим против..."
    ],
 
};

const addListFilms =  (films, parent) => {
    films.sort();
    parent.innerHTML = "" ; 
    films.forEach((iteam, i) => { 
        parent.innerHTML += `<li class="promo__interactive-item"> ${i + 1}. ${iteam} 
                                         <div class="delete"></div>
                                        </li>`;  
    });

    parent.querySelectorAll('.delete').forEach((iteam, i) => {
        
        iteam.addEventListener('click', function() {
            movieDB.movies.splice(i,1);
            addListFilms(films,parent);
        });
    });
};   


const deleteElementPage = (arrElement) => {
    arrElement.forEach(iteam => {
        iteam.remove();
    });    
};

//Изменение жанра 
let promo__genre = document.querySelector(".promo__genre");
promo__genre.innerHTML = "Драма";

//Смена фона
let promo__bg = document.querySelector(".promo__bg"); 
promo__bg.style.backgroundImage= "url('img/bg.jpg')";

//Удаление рекламы
let adv = document.querySelectorAll(".promo__adv img");
deleteElementPage(adv);

//Добавление фильмов
const form = document.querySelector('.add'),
      input = form.querySelector('.adding__input'),
      checkbox = form.querySelector('[type="checkbox"]');


form.addEventListener("submit", event => { 
    event.preventDefault();
    let newFilm = input.value;
    let favorite = checkbox.checked;

    if (newFilm) {
        if (newFilm.length > 21) {
            newFilm = newFilm.substr(0, 21) + "...";
        }

        if (favorite) {
            console.log("Добавить фильм в Любимый");
        }

        newFilm = newFilm.toLowerCase();
        movieDB.movies.push(newFilm);
        addListFilms(movieDB.movies, interactive_list);
        event.target.reset();
    } 
});

//Список фильмов и обработчик
let interactive_list = document.querySelector('.promo__interactive-list'); 
addListFilms(movieDB.movies, interactive_list);

