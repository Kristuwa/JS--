/*Модальное диалоговое окно с формой
важность: 5
Создайте функцию showPrompt(html, callback), которая выводит форму с сообщением (html), полем ввода и кнопками OK/ОТМЕНА.

Пользователь должен ввести что-то в текстовое поле и нажать Enter или кнопку «OK», после чего должна вызываться функция callback(value) со значением поля.
Если пользователь нажимает Esc или кнопку «ОТМЕНА», тогда вызывается callback(null).
В обоих случаях нужно завершить процесс ввода и закрыть диалоговое окно с формой.

Требования:

Форма должна быть в центре окна.
Форма является модальным окном, это значит, что никакое взаимодействие с остальной частью страницы невозможно, пока пользователь не закроет его.
При показе формы, фокус должен находиться сразу внутри <input>.
Клавиши Tab/Shift+Tab должны переключать фокус между полями формы, не позволяя ему переходить к другим элементам страницы.
Пример использования:

showPrompt("Введите что-нибудь<br>...умное :)", function(value) {
  alert(value);
});
Демо во фрейме:


P.S. HTML/CSS исходного кода к этой задаче содержит форму с фиксированным позиционированием, но вы должны сделать её модальной.

Открыть песочницу для задачи.*/
let btnForm = document.getElementById("show-button");

btnForm.addEventListener("click", () => {
  showPrompt("Введите что-нибудь<br>...умное :)", function (value) {
    alert("Вы ввели: " + value);
  });
});

function showPrompt(text, callback) {
  let coverDiv = document.createElement("div");

  coverDiv.id = "cover-div";
  document.body.style.overflowY = "hidden";

  document.body.append(coverDiv);

  let formDiv = document.getElementById("prompt-form-container");
  let formRef = document.getElementById("prompt-form");

  document.getElementById("prompt-message").innerHTML = text;
  formRef.text.value = "";

  function complete(value) {
    let coverContainer = document.getElementById("cover-div");
    coverContainer.remove();
    document.body.style.overflowY = "";

    formDiv.style.display = "none";

    document.addEventListener("keydown", null);
    callback(value);
  }

  formRef.addEventListener("submit", onFormSubmit);

  function onFormSubmit(e) {
    let value = formRef.text.value;
    if (value === "") return false;
    complete(value);
    return false;
  }

  formRef.cancel.addEventListener("click", () => {
    complete(null);
  });

  document.addEventListener("keydown", onPressEsc);

  let lastElem = formRef.elements[formRef.elements.length - 1];
  let firstElem = formRef.elements[0];

  lastElem.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && !e.shiftKey) {
      lastElem.focus();
      return false;
    }
  });

  firstElem.addEventListener("keydown", (e) => {
    if (e.key === "Tab" && e.shiftKey) {
      firstElem.focus();
      return false;
    }
  });

  formDiv.style.display = "block";
  formRef.elements.text.focus();
}

function onPressEsc(e) {
  if (e.key === "Escape") {
    complete(null);
    document.removeEventListener("keydown", onPressEsc);
  }
}
