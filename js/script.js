'use strict';

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');
const body = document.querySelector('body');
const nameBook = book[4].querySelector('[target="_blank"]');
const adv = document.querySelector('.adv');
const book2 = book[0].querySelectorAll('li');
const book5 = book[5].querySelectorAll('li');
const book6 = book[2].querySelectorAll('li');
const chapter = document.createElement('li');

// Расставил порядок книг
books.prepend(book[1]);
book[0].after(book[4]);
book[4].after(book[3]);
book[2].before(book[5]);

// Заменил фоновую картинку
body.style.backgroundImage = "url('./image/you-dont-know-js.jpg')";

// Изменил название 3 книги
nameBook.innerText = "Книга 3. this и Прототипы Объектов";

// Удалил рекламу
adv.remove();

// Исправил порядок глав 2 книги
book2[9].after(book2[2]);
book2[3].after(book2[6]);
book2[6].after(book2[8]);

// Изменил порядок глав 5 книги
book5[1].after(book5[9]);
book5[9].after(book5[3]);
book5[2].before(book5[4]);
book5[7].after(book5[5]);

// Добавил глову в 6 книгу
chapter.textContent = "Глава 8: За пределами ES6";
book6[8].after(chapter);