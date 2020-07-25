'use strict';

const personalMovieDB = {
    count : 0,
    movies : {},
    actors : {},
    genres : [],
    privat : false,
    start : function () {
        do {
            personalMovieDB.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        } while(personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count));
    
        personalMovieDB.count = personalMovieDB.count;
    },
    detectPersonalLevel : function() {
        if (personalMovieDB.count < 10) {
            alert("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count < 30) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            alert("Вы киноман");
        } else {alert("Произошла ошибка");}
    },
    rememberMyFilms : function () {
        for (let i = 0; i < 2; i++) {
            let lastFilms = prompt("Один из последних просмотренных фильмов?",""),
            ratioFilms = prompt("На сколько оцените его?", "");
            if (lastFilms == "" || lastFilms == null || ratioFilms == "" || ratioFilms == null || lastFilms.length > 50) {
                i--;
                alert ("Вы ввели некоррекиные данные");
            } else {personalMovieDB.movies[lastFilms] = ratioFilms;}
        }
    },
    showMyDB : function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres : function() {
        for (let i = 0; i < 3; i++) {
            let likeGenres;
    
            do {
                likeGenres = prompt(`Ваш любимый жанр под номером ${i + 1}`);
            }
            while (likeGenres == "" || likeGenres == null);
    
            personalMovieDB.genres[i] = likeGenres;
        }
        personalMovieDB.genres.forEach(function(item, i){
            console.log(`Любимый жанр #${i + 1} - это ${item}`);
        });
    },
    toggleVisibleMyDB : function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {personalMovieDB.privat = true;
        }
    }
    };

personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
