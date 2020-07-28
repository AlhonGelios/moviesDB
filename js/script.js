'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const   adv = document.querySelectorAll(".promo__adv img"),
            bgPromo = document.querySelector(".promo__bg"),
            genre = bgPromo.querySelector(".promo__genre"),
            movieList = document.querySelector(".promo__interactive-list"),
            //deletefilm = movieList.querySelectorAll(".delete"),
            addForm = document.querySelector(".add"),
            input = addForm.querySelector("input"),
            checkbox = addForm.querySelector('[type="checkbox"]');

    const sortArr = (arr) => {
        for (let i =0; i < arr.length; i++){
            arr[i] = arr[i].toUpperCase();
        }

        arr.sort();
    };
    
    function createMovieList(films, parent) {   
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((item, i) => {
            let recuctFilm;
            if (item.length > 21) {
                recuctFilm = item.slice(0,22) + "...";
            } else {recuctFilm = item;}
            parent.innerHTML +=   `<li class="promo__interactive-item">${i + 1}. ${recuctFilm}
                                        <div class="delete"></div>
                                     </li>`;                          
        });
        movieList.querySelectorAll(".delete").forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent);
            });
        });
    }

    const deleteAdv = (arr) => {
        arr.forEach(item =>{
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = "драма";
        bgPromo.style.backgroundImage = "url(../img/bg.jpg)";
    };

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);
    
    addForm.addEventListener('submit', function(event){
        event.preventDefault();
    
        if (input.value == "") {
            return alert("Вы не ввели название фильма.");
        }
    
        movieDB.movies.push(input.value);
    
        createMovieList(movieDB.movies, movieList);
    
        if (checkbox.checked) {
            console.log("Добавляем любимый фильм");
        }  
        
        event.target.reset();
    });
});

