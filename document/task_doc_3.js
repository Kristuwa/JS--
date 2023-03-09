//------------------task-1--------------------------//

/*Дочерние элементы в DOM
важность: 5
Для страницы:
Напишите код, как получить…
элемент <div>?
<ul>?
второй <li> (с именем Пит)?*/

console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.nextElementSibling);
console.log(
  document.body.firstElementChild.nextElementSibling.lastElementChild
);

//------------------task-2--------------------------//

/*Вопрос о соседях
важность: 5
Если elem – произвольный узел DOM-элемента…

Правда, что elem.lastChild.nextSibling всегда равен null? //Да. Верно
Правда, что elem.children[0].previousSibling всегда равен null ? // не верно*/

//------------------task-3--------------------------//

/*Выделите ячейки по диагонали
важность: 5
Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.

Вам нужно получить из таблицы <table> все диагональные <td> и выделить их, используя код:

//  в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red';
*/
const table = document.body.children[2];
console.log(table);
for (let i = 0; i < table.rows.length; i += 1) {
  table.rows[i].cells[i].style.backgroundColor = "red";
}
