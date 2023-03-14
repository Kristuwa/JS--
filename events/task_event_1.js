//-------------------task-1-------------------//
/*Скрыть элемент по нажатию кнопки
важность: 5
Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.

Демо:*/
const button = document.querySelector("#hider");
const text = document.querySelector("#text");
button.addEventListener("click", onClickBtn);
function onClickBtn() {
  text.style.display = "none";
}
//-------------------task-2-------------------//
/*Спрятать себя
важность: 5
Создайте кнопку, которая будет скрывать себя по нажатию.
 */

const btn = document.querySelector(".button");

btn.addEventListener("click", onHiddenBtn);
function onHiddenBtn() {
  btn.style.display = "none";
  btn.removeEventListener("click", onHiddenBtn);
}

//-------------------task-3-------------------//
/*Какой обработчик запустится?
важность: 5
В переменной button находится кнопка. Изначально на ней нет обработчиков.

Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?*/

button.addEventListener("click", () => alert("1")); //запустится

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2); //запустится
//выведет 1, 2

//-------------------task-4-------------------//
/*Передвиньте мяч по полю
важность: 5
Пусть мяч перемещается при клике на поле, туда, куда был клик, вот так:
Требования:

Центр мяча должен совпадать с местом нажатия мыши (если это возможно без пересечения краёв поля);
CSS-анимация желательна, но не обязательна;
Мяч ни в коем случае не должен пересекать границы поля;
При прокрутке страницы ничего не должно ломаться;
Заметки:

Код должен уметь работать с различными размерами мяча и поля, не привязываться к каким-либо фиксированным значениям.
Используйте свойства event.clientX/event.clientY для определения координат мыши при клике.
*/

const field = document.querySelector("#field");
const ball = document.querySelector("#ball");

field.addEventListener("click", onFieldClick);

function onFieldClick(e) {
  let fieldCoords = field.getBoundingClientRect();

  field.style.position = "relative";
  ball.style.position = "absolute";

  let top =
    e.clientY - fieldCoords.top - field.clientTop - ball.offsetHeight / 2;
  let left =
    e.clientX - fieldCoords.left - field.clientLeft - ball.offsetWidth / 2;

  if (top < 0) {
    top = 0;
  }

  if (left < 0) left = 0;

  if (left + ball.clientWidth > field.clientWidth) {
    left = field.clientWidth - ball.clientWidth;
  }

  if (top + ball.clientHeight > field.clientHeight) {
    top = field.clientHeight - ball.clientHeight;
  }

  ball.style.left = left + "px";
  ball.style.top = top + "px";
}
//-------------------task-5-------------------//
/*Создать меню, которое по нажатию открывается либо закрывается:*/
const btnMenu = document.querySelector("#menu");
const list = document.querySelector("#menu-list");
const icons = document.querySelectorAll(".icon");
btnMenu.addEventListener("click", onOpenMenu);

function onOpenMenu() {
  list.classList.toggle("open");
  [...icons].map((icon) => {
    if (icon.classList.contains("open")) {
      icon.classList.remove("open");
    } else {
      icon.classList.add("open");
    }
  });
}
//-------------------task-6-------------------//

/*Есть список сообщений.

При помощи JavaScript для каждого сообщения добавьте в верхний правый угол кнопку закрытия.

Результат должен выглядеть, как показано здесь:
<button class="remove-button">[x]</button>*/

let panes = document.querySelectorAll(".pane");

[...panes].map((pane) => {
  let btn = document.createElement("button");
  btn.classList.add("remove-button");
  btn.textContent = "[x]";
  pane.style.position = "relative";
  btn.style.cssText = `position: absolute;
  top:10px;right: 10px`;
  pane.insertAdjacentElement("afterbegin", btn);
  btn.addEventListener("click", onCloseBtn);
});

function onCloseBtn(e) {
  const pane = e.target.closest("div");
  console.log(pane);
  if (e.currentTarget === e.target) {
    pane.style.display = "none";
  }
}
//-------------------task-7-------------------//
/*Карусель
важность: 4
Создайте «Карусель» –- ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.*/
let btnArrowLeft = document.querySelector(".arrow-left");
let btnArrowRight = document.querySelector(".arrow-right");
let gallery = document.querySelector(".gallery-list");
let galleryItem = Array.from(document.querySelectorAll(".gallery__item"));
let countLi = galleryItem.length - 3;

btnArrowLeft.addEventListener("click", onLeftClick);
btnArrowRight.addEventListener("click", onRightClick);

let position = 0;

function onLeftClick() {
  position -= 130;
  if (position < -(countLi * 130)) {
    position = -(countLi * 130);
  }
  gallery.style.cssText = `transform: translateX(${position}px);`;
}

function onRightClick() {
  position += 130;
  if (position > 0) {
    position = 0;
  }
  gallery.style.cssText = `transform:translateX(${position}px)`;
}
