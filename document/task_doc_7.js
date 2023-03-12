//------------------------task-1-----------------------//
/*createTextNode vs innerHTML vs textContent
важность: 5
У нас есть пустой DOM-элемент elem и строка text.

Какие из этих 3-х команд работают одинаково?

elem.append(document.createTextNode(text))
elem.innerHTML = text
elem.textContent = text

Ответ: 1 и 3.
*/
//------------------------task-2-----------------------//
// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
const elem = document.getElementById("elem");
function clear(elem) {
  elem.innerHTML = "";
}

clear(elem); // очищает список

//------------------------task-3-----------------------//

/*Почему остаётся "aaa"?
важность: 1
В примере ниже вызов table.remove() удаляет таблицу из документа.

Но если вы запустите его, вы увидите, что текст "aaa" все еще виден.

Почему так происходит?

<table id="table">
  aaa
  <tr>
    <td>Тест</td>
  </tr>
</table>

<script>
  alert(table); // таблица, как и должно быть

  table.remove();
  // почему в документе остался текст "ааа"?
</script>
Ответ: неправильная разметка, автоматом браузер редактирует, и получается текст до таблицы, поэтому не удаляется
*/
//------------------------task-4-----------------------//
/*Создайте список
важность: 4
Напишите интерфейс для создания списка.

Для каждого пункта:

Запрашивайте содержимое пункта у пользователя с помощью prompt.
Создавайте элемент <li> и добавляйте его к <ul>.
Продолжайте до тех пор, пока пользователь не отменит ввод (нажатием клавиши Esc или введя пустую строку).
Все элементы должны создаваться динамически.

Если пользователь вводит HTML-теги, они должны обрабатываться как текст.*/

let ul = document.createElement("ul");
document.body.append(ul);

while (true) {
  let text = prompt("введите текст", "");
  let li = document.createElement("li");
  li.textContent = text;
  ul.append(li);
  if (!text) {
    break;
  }
}

//------------------------task-5-----------------------//

/*Напишите функцию createTree, которая создаёт вложенный список ul/li из объекта.

Например:


Синтаксис:

let container = document.getElementById('container');
createTree(container, data); // создаёт дерево в контейнере
Результат (дерево):


Выберите один из двух способов решения этой задачи:

Создать строку, а затем присвоить через container.innerHTML.
Создавать узлы через методы DOM.
Если получится – сделайте оба.

P.S. Желательно, чтобы в дереве не было лишних элементов, в частности -– пустых <ul></ul> на нижнем уровне.*/
let data = {
  Рыбы: {
    форель: {},
    лосось: {},
  },

  Деревья: {
    Огромные: {
      секвойя: {},
      дуб: {},
    },
    Цветковые: {
      яблоня: {},
      магнолия: {},
    },
  },
};

const keys = Object.keys(data);
let str = "";

for (let key of keys) {
  const keyNew = Object.keys(data[key]);
  let newStr = "";

  keyNew.map((item) => {
    const objKeys = Object.keys(data[key][item]);
    let newString = "";

    objKeys.map((el) => {
      newString += `<li>${el}</li>`;
    });

    if (objKeys.length === 0) {
      newStr += `<li>${item}</li>`;
    } else {
      newStr += `<li>${item}<ul>${newString}</ul></li>`;
    }

    return newStr;
  });

  str += `<li>${key}<ul>${newStr}</ul></li>`;
}

ul.innerHTML = str;

//------------------------task-6-----------------------//
/*Выведите список потомков в дереве
важность: 5
Есть дерево, организованное в виде вложенных списков ul/li.

Напишите код, который добавит каждому элементу списка <li> количество вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.
*/

let list = document.getElementsByTagName("li");

for (let li of list) {
  let count = li.getElementsByTagName("li").length;
  if (!count) continue;
  li.firstChild.data += " [" + count + "]";
}

//------------------------task-7-----------------------//

/*Создайте календарь в виде таблицы
важность: 4
Напишите функцию createCalendar(elem, year, month).

Вызов функции должен создать календарь для заданного месяца month в году year и вставить его в elem.

Календарь должен быть таблицей, где неделя – это <tr>, а день – это <td>. У таблицы должен быть заголовок с названиями дней недели, каждый день – <th>, первым днём недели должен быть понедельник.

Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий календарь:*/

const calendar = document.createElement("div");
document.body.append(calendar);

function createCalendar(elem, year, month) {
  const monthReal = month - 1;
  const date = new Date(year, monthReal);

  let table =
    "<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>";

  for (let i = 0; i < getDay(date); i += 1) {
    table += "<td></td>";
  }

  while (date.getMonth() === monthReal) {
    table += "<td>" + date.getDate() + "</td>";

    if (getDay(date) % 7 === 6) {
      table += "</tr><tr>";
    }

    date.setDate(date.getDate() + 1);
  }

  if (getDay(date) !== 0) {
    for (let i = getDay(date); i < 7; i += 1) {
      table += "<td></td>";
    }
  }

  table += "</tr></table>";

  elem.innerHTML = table;
}

function getDay(d) {
  let day = d.getDay();
  if (day === 0) day = 7;
  return day - 1;
}

createCalendar(calendar, 2012, 9);

//------------------------task-8-----------------------//
/*Цветные часы с использованием setInterval
важность: 4
Создайте цветные часы как в примере ниже:

Для стилизации используйте HTML/CSS, JavaScript должен только обновлять время в элементах.*/

const refs = {
  startBtn: document.querySelector("button[data-start]"),
  stopBtn: document.querySelector("button[data-stop]"),
  hoursLabel: document.querySelector("span[data-hours]"),
  minutesLabel: document.querySelector("span[data-minutes]"),
  secondsLabel: document.querySelector("span[data-seconds]"),
};

refs.startBtn.addEventListener("click", onStartClick);
refs.stopBtn.addEventListener("click", onStopClick);

let timeId;

function onStartClick() {
  timeId = setInterval(() => {
    const timeNow = new Date();
    const hours = timeNow.getHours();
    const minutes = timeNow.getMinutes();
    const seconds = timeNow.getSeconds();
    if (hours < 10) {
      refs.hoursLabel.innerHTML = `0${hours}`;
    } else {
      refs.hoursLabel.innerHTML = `${hours}`;
    }
    if (minutes < 10) {
      refs.minutesLabel.innerHTML = `0${minutes}`;
    } else {
      refs.minutesLabel.innerHTML = `${minutes}`;
    }
    if (seconds < 10) {
      refs.secondsLabel.innerHTML = `0${seconds}`;
    } else {
      refs.secondsLabel.innerHTML = `${seconds}`;
    }
  }, 1000);
}
function onStopClick() {
  clearInterval(timeId);
}
//------------------------task-9-----------------------//
/*Вставьте HTML в список
важность: 5
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:

*/
const liOne = document.querySelector("#one");

liOne.insertAdjacentHTML("afterend", "<li>2</li><li>3</li>");

//------------------------task-10----------------------//
/*Сортировка таблицы
важность: 5
В ней может быть больше строк.
Напишите код для сортировки по столбцу "name".
*/
const table = document.querySelector(".table-name");

const sortedRows = [...table.rows]
  .slice(1)
  .sort((a, b) => (a.cells[0].innerHTML > b.cells[0].innerHTML ? 1 : -1));

table.tBodies[0].append(...sortedRows);
