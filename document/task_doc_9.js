//---------------------task-1-----------------//
/*Найти размер прокрутки снизу
важность: 5
Свойство elem.scrollTop содержит размер прокрученной области при отсчёте сверху. А как подсчитать размер прокрутки снизу (назовём его scrollBottom)?

Напишите соответствующее выражение для произвольного элемента elem.

P.S. Проверьте: если прокрутки нет вообще или элемент полностью прокручен – оно должно давать 0.*/
const scrollBottom = elem.scrollHeight - elem.scrollTop - elem.clientHeight;

//---------------------task-2-----------------//
/*Узнать ширину полосы прокрутки
важность: 3
Напишите код, который возвращает ширину стандартной полосы прокрутки.

Для Windows она обычно колеблется от 12px до 20px. Если браузер не выделяет место под полосу прокрутки (так тоже бывает, она может быть прозрачной над текстом), тогда значение может быть 0px.

P.S. Ваш код должен работать в любом HTML-документе, независимо от его содержимого*/
const div = document.createElement("div");

div.style.cssText = `overflowY :scroll;
width: 50px;
height: 50px;
`;

document.body.append(div);

const scrollWidth = div.offsetWidth - div.clientWidth;

div.remove();

alert(scrollWidth);

//---------------------task-3-----------------//
/*Поместите мяч в центр поля
важность: 5*/

ball.style.left =
  Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + "px";
ball.style.top =
  Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + "px";
