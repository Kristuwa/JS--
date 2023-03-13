//-------------------------task-1-----------------//
/*Найдите координаты точек относительно окна браузера
важность: 5
В ифрейме ниже располагается документ с зелёным «полем».

Используйте JavaScript, чтобы найти координаты углов, обозначенных стрелками.

В документе уже реализована функциональность, когда при клике на любом месте показываются соответствующие координаты.*/

// let elem = document.getElementById("field");

// let coordsLeftUp = [
//   elem.getBoundingClientRect().left,
//   elem.getBoundingClientRect().top,
// ];

// let coordsRight = [
//   elem.getBoundingClientRect().right,
//   elem.getBoundingClientRect().bottom,
// ];

// let coordsLeft = [
//   elem.getBoundingClientRect().left + field.clientLeft,
//   elem.getBoundingClientRect().top + field.clientTop,
// ];

// let coordsRightDown = [
//   elem.getBoundingClientRect().left + elem.clientLeft + elem.clientWidth,
//   elem.getBoundingClientRect().top + elem.clientTop + elem.clientHeight,
// ];
//-------------------------task-2-----------------//

/*Покажите заметку рядом с элементом
важность: 5
Создайте функцию positionAt(anchor, position, elem), которая позиционирует элемент elem в зависимости от значения свойства position рядом с элементом anchor.

Аргумент position – строка с одним из 3 значений:

"top" – расположить elem прямо над anchor
"right" – расположить elem непосредственно справа от anchor
"bottom" – расположить elem прямо под anchor
Она используется внутри функции showNote(anchor, position, html), которая уже есть в исходном коде задачи. Она создаёт и показывает элемент-«заметку» с текстом html на заданной позиции position рядом с элементом anchor.

Демо заметки:*/

function showNote(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  document.body.append(note);

  positionAtOne(anchor, position, note);
}
let blockquote = document.querySelector("blockquote");

showNote(blockquote, "top", "note above");
showNote(blockquote, "right", "note at the right");
showNote(blockquote, "bottom", "note below");

function positionAtOne(anchor, position, elem) {
  // ... ваш код ...
  let box = anchor.getBoundingClientRect();

  if (position === "top") {
    elem.style.left = box.left + "px";
    elem.style.top = box.top - elem.offsetHeight + "px";
  } else if (position === "right") {
    elem.style.left = box.left + anchor.offsetWidth + "px";
    elem.style.top = box.top + "px";
  } else if (position === "bottom") {
    elem.style.left = box.left + "px";
    elem.style.top = box.top + anchor.offsetHeight + "px";
  }
}
//-------------------------task-3-----------------//
/*Покажите заметку около элемента (абсолютное позиционирование)
важность: 5
Измените код решения предыдущего задания так, чтобы элемент заметки использовал свойство position:absolute вместо position:fixed.

Это предотвратит расхождение элементов при прокрутке страницы.

Используйте решение предыдущего задания для начала. Чтобы проверить решение в условиях с прокруткой, добавьте стиль элементу <body style="height: 2000px">.*/
document.body.style.height = `2000px`;

function getCoords(elem) {
  let box = elem.getBoundingClientRect();

  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset,
  };
}

function positionAt(anchor, position, elem) {
  // ... ваш код ...
  let anchorCoords = getCoords(anchor);

  if (position === "top") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
  } else if (position === "right") {
    elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
    elem.style.top = anchorCoords.top + "px";
  } else if (position === "bottom") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
  }
}

function showNoteAbsolute(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  note.style.position = "absolute";
  document.body.append(note);

  positionAt(anchor, position, note);
}

showNoteAbsolute(blockquote, "top", "note above");
showNoteAbsolute(blockquote, "right", "note at the right");
showNoteAbsolute(blockquote, "bottom", "note below");
//-------------------------task-4-----------------//
/*Расположите заметку внутри элемента (абсолютное позиционирование)
важность: 5
Усовершенствуйте решение предыдущего задания Покажите заметку около элемента (абсолютное позиционирование): научите функцию positionAt(anchor, position, elem) вставлять elem внутрь anchor.

Новые значения для аргумента position:

top-out, right-out, bottom-out – работают так же, как раньше, они вставляют elem сверху/справа/снизу anchor.
top-in, right-in, bottom-in – вставляют elem внутрь anchor: приклеивают его к верхнему/правому/нижнему краю.*/

function positionAtAbsoluteUp(anchor, position, elem) {
  let anchorCoords = getCoords(anchor);

  if (position === "top-out") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top - elem.offsetHeight + "px";
  } else if (position === "right-out") {
    elem.style.left = anchorCoords.left + anchor.offsetWidth + "px";
    elem.style.top = anchorCoords.top + "px";
  } else if (position === "bottom-out") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top + anchor.offsetHeight + "px";
  } else if (position === "top-in") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top = anchorCoords.top + "px";
  } else if (position === "right-in") {
    elem.style.width = "150px";
    elem.style.left =
      anchorCoords.left + anchor.offsetWidth - elem.offsetWidth + "px";
    elem.style.top = anchorCoords.top + "px";
  } else if (position === "bottom-in") {
    elem.style.left = anchorCoords.left + "px";
    elem.style.top =
      anchorCoords.top + anchor.offsetHeight - elem.offsetHeight + "px";
  }
}

function showNoteAbsoluteUp(anchor, position, html) {
  let note = document.createElement("div");
  note.className = "note";
  note.innerHTML = html;
  note.style.position = "absolute";
  document.body.append(note);

  positionAt(anchor, position, note);
}

showNoteAbsoluteUp(blockquote, "top-in", "note top-in");
showNoteAbsoluteUp(blockquote, "top-out", "note top-out");
showNoteAbsoluteUp(blockquote, "right-out", "note right-out");
showNoteAbsoluteUp(blockquote, "bottom-in", "note bottom-in");
