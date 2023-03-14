//-------------------task-1--------------//
/*Добавьте пункт к выпадающему списку
важность: 5
Имеется <select>:

<select id="genres">
  <option value="rock">Рок</option>
  <option value="blues" selected>Блюз</option>
</select>
Используя JavaScript:

Выведите значение и текст выбранного пункта.
Добавьте пункт: <option value="classic">Классика</option>.
Сделайте его выбранным.*/
let select = document.querySelector("#genres");
let selectedEl = Array.from(select.options).filter((option) => option.selected);
alert(selectedEl[0].value);
alert(selectedEl[0].text);
let option = new Option("Классика", "classic", true, true);
select.append(option);
