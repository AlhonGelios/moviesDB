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
    personalMovieDB.movies[lastFilms] = ratioFilms;
}

console.log(personalMovieDB);