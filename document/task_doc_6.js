//------------------------task-1-----------------------//

/*Получите атрибут
важность: 5
Напишите код для выбора элемента с атрибутом data-widget-name из документа и прочитайте его значение.*/
console.log(document.querySelector("[data-widget-name]").dataset.widgetName);

//------------------------task-2-----------------------//
/*Сделайте внешние ссылки оранжевыми
важность: 3
Сделайте все внешние ссылки оранжевыми, изменяя их свойство style.

Ссылка является внешней, если:

Её href содержит ://
Но не начинается с http://internal.com.*/
// добавление стиля для одной ссылки
let links = document.querySelectorAll("a");
console.log(links);
for (let link of [...links]) {
  const href = link.getAttribute("href");
  console.log(href);
  if (!href) continue;

  if (!href.includes("://")) continue;

  if (href.startsWith("http://internal.com")) continue;
  link.style.color = "orange";
}
