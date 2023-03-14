//--------------------task-1-----------------//

/*Почему не работает return false?
важность: 3
Почему в коде ниже return false не работает?

<script>
  function handler() {
    alert( "..." );
   return false;
  }
</script>

<a href="https://w3.org" onclick="return handler();">браузер откроет w3.org</a>

Браузер переходит по указанной ссылке, но нам этого не нужно.
*/

//--------------------task-2-----------------//

/*Поймайте переход по ссылке
важность: 5
Сделайте так, чтобы при клике на ссылки внутри элемента id="contents" пользователю выводился вопрос о том, действительно ли он хочет покинуть страницу, и если он не хочет, то прерывать переход по ссылке.

Так это должно работать:


Детали:

Содержимое #contents может быть загружено динамически и присвоено при помощи innerHTML. Так что найти все ссылки и поставить на них обработчики нельзя. Используйте делегирование.
Содержимое может иметь вложенные теги, в том числе внутри ссылок, например, <a href=".."><i>...</i></a>.*/
let linkContainer = document.querySelector("#contents");

linkContainer.addEventListener("click", onClickLink);

function onClickLink(e) {
  let result = confirm("Вы действительно хотите перейти по ссылке?");
  if (!result) {
    e.preventDefault();
  }
  return e.target.getAttribute("href");
}

//--------------------task-3-----------------//

/*Галерея изображений
важность: 5
Создайте галерею изображений, в которой основное изображение изменяется при клике на уменьшенный вариант.

Например:*/
let thumbs = document.querySelector("#thumbs");

thumbs.addEventListener("click", onImgClick);

function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }

  let src = e.target.closest("a").getAttribute("href");
  let img = e.target.closest("div").querySelector("p").querySelector("img");
  img.src = src;
}
