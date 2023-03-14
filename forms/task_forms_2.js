//-------------------task-1--------------//
/*Создайте <div>, который превращается в <textarea>, если на него кликнуть.

<textarea> позволяет редактировать HTML в элементе <div>.

Когда пользователь нажимает Enter или переводит фокус, <textarea> превращается обратно в <div>, и его содержимое становится HTML-кодом в <div>.*/
let div = document.querySelector("#view");
let textarea;
div.addEventListener("click", onDivChange);
window.addEventListener("keydown", onEnterPress);

function onEnterPress(e) {
  if (e.key === "Enter") {
    textarea.blur();
  }
}

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

//-------------------task-3--------------//
