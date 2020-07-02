'use strict';

let numberOfFilms;
const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    };

function start() {
    do {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    } while(numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms));

    personalMovieDB.count = numberOfFilms;
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        alert("Вы киноман");
    } else {alert("Произошла ошибка");}
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let lastFilms = prompt("Один из последних просмотренных фильмов?",""),
        ratioFilms = prompt("На сколько оцените его?", "");
        if (lastFilms == "" || lastFilms == null || ratioFilms == "" || ratioFilms == null || lastFilms.length > 50) {
            i--;
            alert ("Вы ввели некоррекиные данные");
        } else {personalMovieDB.movies[lastFilms] = ratioFilms;}
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let likeGenres;

        do {
            likeGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
        }
        while (likeGenres == "" || likeGenres == null);

        personalMovieDB.genres[i] = likeGenres;
    }
}

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);
