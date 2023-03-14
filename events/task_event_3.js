//---------------------task-1---------------//
/*Спрячьте сообщения с помощью делегирования
важность: 5
Дан список сообщений с кнопками для удаления [x]. Заставьте кнопки работать.*/

let container = document.querySelector("#container");

container.addEventListener("click", onClose);

function onClose(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  e.target.closest("div").style.display = "none";
}
//---------------------task-2---------------//
/*Раскрывающееся дерево
важность: 5
Создайте дерево, которое по клику на заголовок скрывает-показывает потомков:
Требования:

Использовать только один обработчик событий (применить делегирование)
Клик вне текста заголовка (на пустом месте) ничего делать не должен.
*/
let tree = document.querySelector(".tree");

tree.addEventListener("click", onOpenMenu);

function onOpenMenu(e) {
  if (e.target.nodeName !== "SPAN") {
    return;
  }
  let child = e.target.parentNode.querySelector("ul");
  console.log(child);
  child.classList.toggle("open");
}
//---------------------task-3---------------//
/*Сортируемая таблица
важность: 4
Сделать таблицу сортируемой: при клике на элемент <th> строки таблицы должны сортироваться по соответствующему столбцу.

Каждый элемент <th> имеет атрибут data-type:
В примере выше первый столбец содержит числа, а второй – строки. Функция сортировки должна это учитывать, ведь числа сортируются иначе, чем строки.

Сортировка должна поддерживать только типы "string" и "number".*/

let table = document.querySelector("#grid");

table.addEventListener("click", onTableClick);

function onTableClick(e) {
  let sortedRows;
  if (e.target.nodeName !== "TH") {
    return;
  }
  if (e.target.dataset.type === "number") {
    sortedRows = [...table.rows]
      .slice(1)
      .sort((a, b) => a.cells[0].innerHTML - b.cells[0].innerHTML);
  } else if (e.target.dataset.type === "string") {
    sortedRows = [...table.rows].slice(1).sort((a, b) => {
      return a.cells[1].innerHTML > b.cells[1].innerHTML ? 1 : -1;
    });
  }

  table.tBodies[0].append(...sortedRows);
}
//---------------------task-4---------------//
/*Поведение "подсказка"
важность: 5
Напишите JS-код, реализующий поведение «подсказка».

При наведении мыши на элемент с атрибутом data-tooltip, над ним должна показываться подсказка и скрываться при переходе на другой элемент.
В этой задаче мы полагаем, что во всех элементах с атрибутом data-tooltip – только текст. То есть, в них нет вложенных тегов (пока).

Детали оформления:

Отступ от подсказки до элемента с data-tooltip должен быть 5px по высоте.
Подсказка должна быть, по возможности, посередине элемента.
Подсказка не должна вылезать за границы экрана, в том числе если страница частично прокручена, если нельзя показать сверху – показывать снизу элемента.
Текст подсказки брать из значения атрибута data-tooltip. Это может быть произвольный HTML.
Для решения вам понадобятся два события:

mouseover срабатывает, когда указатель мыши заходит на элемент.
mouseout срабатывает, когда указатель мыши уходит с элемента.
Примените делегирование событий: установите оба обработчика на элемент document, чтобы отслеживать «заход» и «уход» курсора на элементы с атрибутом data-tooltip и управлять подсказками с их же помощью.

После реализации поведения – люди, даже не знакомые с JavaScript смогут добавлять подсказки к элементам.

P.S. В один момент может быть показана только одна подсказка.*/
let documentRef = document.querySelector(".document");
documentRef.addEventListener("mouseover", onMouseOver);
documentRef.addEventListener("mouseout", onMouseOut);
let span;

function onMouseOver(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  span = document.createElement("span");
  span.classList.add("tooltip");
  span.textContent = e.target.dataset.tooltip;
  e.target.insertAdjacentElement("afterbegin", span);
  let coords = e.target.getBoundingClientRect();

  let left = coords.left + (e.target.offsetWidth - span.offsetWidth) / 2;
  if (left < 0) left = 0; // не заезжать за левый край окна

  let top = coords.top - span.offsetHeight - 5;
  if (top < 0) {
    // если подсказка не помещается сверху, то отображать её снизу
    top = coords.top + e.target.offsetHeight + 5;
  }
  span.style.cssText = `top: ${top}px;
left:${left}px;`;

  e.target.style.cssText = `position: relative`;
}

function onMouseOut(e) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  span.remove();
}
