//------------------task-1--------------------------//
/*Поиск элементов
важность: 4
Вот документ с таблицей и формой.

Как найти?…

Таблицу с id="age-table".
Все элементы label внутри этой таблицы (их три).
Первый td в этой таблице (со словом «Age»).
Форму form с именем name="search".
Первый input в этой форме.
Последний input в этой форме.
Откройте страницу table.html в отдельном окне и используйте для этого браузерные инструменты разработчика.*/
const table = document.getElementById("age-table");
console.log(table);

const labelsList = table.querySelectorAll("label");
console.log(labelsList);

const formByName = document.getElementsByName("search")[0];
console.log(formByName);

const firstInputElemInForm = formByName.querySelector("input");
console.log(firstInputElemInForm);

const lastInputElemInForm = formByName.querySelectorAll("input");
console.log(lastInputElemInForm[lastInputElemInForm.length - 1]);
