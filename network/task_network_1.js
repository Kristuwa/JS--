/*Получите данные о пользователях GitHub
Создайте асинхронную функцию getUsers(names), которая получает на вход массив логинов пользователей GitHub, запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

Информация о пользователе GitHub с логином USERNAME доступна по ссылке: https://api.github.com/users/USERNAME.

В песочнице есть тестовый пример.

Важные детали:

На каждого пользователя должен приходиться один запрос fetch.
Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
Если какой-то запрос завершается ошибкой или оказалось, что данных о запрашиваемом пользователе нет, то функция должна возвращать null в массиве результатов.*/
async function getUsers(names) {
  let dataResult = names.map((name) =>
    fetch(`https://api.github.com/users/${name}`)
      .then((resolve) => {
        if (resolve.status !== 200) {
          return null;
        } else {
          return resolve.json();
        }
      })
      .catch((error) => {
        console.log(error);
        return null;
      })
  );

  let result = await Promise.all(dataResult);
  console.log(result);
  return result;
}
getUsers(["iliakan", "remy", "no.such.users"]);
