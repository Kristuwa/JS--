//-------------------task-1--------------//
/*Создайте <div>, который превращается в <textarea>, если на него кликнуть.

<textarea> позволяет редактировать HTML в элементе <div>.

Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.*/
let div = document.querySelector("#view");
let textarea;
div.addEventListener("click", onDivChange);
window.addEventListener("keydown", onEnterPress);

function onDivChange() {
  textarea = document.createElement("textarea");
  textarea.classList.add("view");
  textarea.textContent = div.textContent;

  div.remove();

  document.querySelector(".title").insertAdjacentElement("afterend", textarea);

  textarea.focus();

  div.removeEventListener("click", onDivChange);
  textarea.addEventListener("focusout", onBlur);
}

function onEnterPress(e) {
  if (e.key === "Enter") {
    textarea.blur();
  }
}

function onBlur() {
  div = document.createElement("div");
  div.classList.add("view");
  div.textContent = textarea.value;

  textarea.remove();

  document.querySelector(".title").insertAdjacentElement("afterend", div);

  div.addEventListener("click", onDivChange);
  textarea.removeEventListener("focusout", onBlur);
}

//-------------------task-2--------------//
/*Редактирование TD по клику
важность: 5
Сделайте ячейки таблицы редактируемыми по клику.

По клику – ячейка должна стать «редактируемой» (textarea появляется внутри), мы можем изменять HTML. Изменение размера ячейки должно быть отключено.
Кнопки OK и ОТМЕНА появляются ниже ячейки и, соответственно, завершают/отменяют редактирование.
Только одну ячейку можно редактировать за один раз. Пока <td> в «режиме редактирования», клики по другим ячейкам игнорируются.
Таблица может иметь множество ячеек. Используйте делегирование событий.*/

let table = document.querySelector("#bagua-table");

table.addEventListener("click", onTableClick);

let textareaField;
let td;

function onTableClick(e) {
  if (e.target.nodeName !== "TD") {
    return;
  }
  td = e.target;
  textareaField = document.createElement("textarea");

  textareaField.classList.add(`textarea`);
  textareaField.style.width = e.target.clientWidth + "px";
  textareaField.style.height = e.target.clientHeight + "px";

  textareaField.textContent = e.target.innerHTML;

  const buttons = `<div class='buttons-list'><button type='button' class='ok'>ok</button><button type='button' class='cancel'>cancel</button></div>`;

  e.target.style.padding = "0";
  e.target.innerHTML = "";
  e.target.appendChild(textareaField);
  e.target.insertAdjacentHTML("beforeEnd", buttons);

  textareaField.focus();

  e.target
    .querySelector(".buttons-list")
    .addEventListener("click", (e) => onClickBtn(e, td));
}

function onClickBtn(e, elem) {
  if (e.target.nodeName !== "BUTTON") {
    return;
  }
  if (e.target.textContent === "ok") {
    elem.innerHTML = textareaField.value;
  } else if (e.target.textContent === "cancel") {
    elem.innerHTML = td.querySelector("textarea").textContent;
  }
}
//-------------------task-3--------------//
/*Мышь, управляемая клавиатурой
важность: 4
Установите фокус на мышь. Затем используйте клавиши со стрелками, чтобы её двигать:

Демо в новом окне

P.S. Не добавляйте обработчики никуда, кроме элемента #mouse.

P.P.S. Не изменяйте HTML/CSS, подход должен быть общим и работать с любым элементом.*/
let mouse = document.querySelector("#mouse");

mouse.tabIndex = 0;

mouse.addEventListener("click", onMouseClick);
mouse.addEventListener("keydown", onMouseKey);

function onMouseClick(e) {
  let coords = e.target.getBoundingClientRect();

  e.target.style.left = coords.left + "px";
  e.target.style.top = coords.top + "px";

  e.target.style.position = "fixed";
}

function onMouseKey(e) {
  switch (e.key) {
    case "ArrowLeft":
      e.target.style.left =
        parseInt(e.target.style.left) - e.target.offsetWidth + "px";
      return false;
    case "ArrowUp":
      e.target.style.top =
        parseInt(e.target.style.top) - e.target.offsetHeight + "px";
      return false;
    case "ArrowRight":
      e.target.style.left =
        parseInt(e.target.style.left) + e.target.offsetWidth + "px";
      return false;
    case "ArrowDown":
      e.target.style.top =
        parseInt(e.target.style.top) + e.target.offsetHeight + "px";
      return false;
  }
}
