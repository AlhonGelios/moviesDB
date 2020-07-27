/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

// Возьмите свой код из предыдущей практики
'use strict';

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
        moveList = document.querySelector(".promo__interactive-list"),
        deletefilm = moveList.querySelectorAll(".delete"),
        addForm = document.querySelector(".add"),
        input = addForm.querySelector("input");


adv.forEach(item =>{
    item.remove();
});
genre.textContent = "драма";
bgPromo.style.background = "url(../img/bg.jpg) center center/cover no-repeat";

movieDB.movies.forEach(event => {
    event.toUpperCase();
});
movieDB.movies.sort();
moveList.innerHTML = "";

movieDB.movies.forEach((item, i) => {
    moveList.innerHTML +=   `<li class="promo__interactive-item">${i + 1}. ${item}
                                <div class="delete"></div>
                            </li>`;
});


addForm.addEventListener('submit', function(event){
    event.preventDefault();

    if (input.value == "") {
        return alert("Вы не ввели название фильма.");
    }

    movieDB.movies.push(input.value);
    input.value = "";

    movieDB.movies.forEach(event => {
        event.toUpperCase();
    });
    movieDB.movies.sort();

    moveList.innerHTML = "";

    movieDB.movies.forEach((item, i) => {
        if (item.length > 21) {
            item = item.slice(0,22) + "...";
        }
        moveList.innerHTML +=   `<li class="promo__interactive-item">${i + 1}. ${item}
                                <div class="delete"></div>
                            </li>`;
    });
    
});