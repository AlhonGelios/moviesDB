'use strict';

const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
const personalMovieDB = {
        count : numberOfFilms,
        movies : {},
        actors : {},
        genres : [],
        privat : false,
    };

for (let i = 0; i < 2; i++) {
    let lastFilms = prompt("Один из последних просмотренных фильмов?",""),
    ratioFilms = prompt("На сколько оцените его?", "");
    if (lastFilms == "" || lastFilms == null || ratioFilms == "" || ratioFilms == null) {
        i--;
        alert ("Вы ввели некоррекиные данные");
    } else {personalMovieDB.movies[lastFilms] = ratioFilms;}
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
} else if (personalMovieDB.count < 30) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count >= 30) {
    alert("Вы киноман");
} else alert("Произошла ошибка");

console.log(personalMovieDB);