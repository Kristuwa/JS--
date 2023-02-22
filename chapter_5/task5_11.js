//-----------------------------task-1-----------------------------//
/*Создайте дату
Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона – местная.
Для вывода используйте alert.*/
let date = new Date(2012, 1, 20, 3, 12);
alert(date);
//-----------------------------task-2-----------------------------//
/*Покажите день недели
Напишите функцию getWeekDay(date), показывающую день недели в коротком формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».
Например:
let date = new Date(2012, 0, 5);  // 3 января 2012 года
alert( getWeekDay(date) );*/
function getWeekDay(date) {
  const nowDay = date.getDay();
  switch (nowDay) {
    case 1:
      return "ПН";
    case 2:
      return "ВТ";
    case 3:
      return "СР";
    case 4:
      return "ЧТ";
    case 5:
      return "ПТ";
    case 6:
      return "СБ";
    case 0:
      return "ВС";
  }
}
let date1 = new Date(2023, 1, 20); //
let date2 = new Date(2023, 1, 21); //

alert(getWeekDay(date1));
alert(getWeekDay(date2));

//-----------------------------task-3-----------------------------//
/*День недели в европейской нумерации
В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию getLocalDay(date), которая возвращает «европейский» день недели для даты date.*/
let date3 = new Date(2012, 0, 3);
function getLocalDay(date) {
  if (date.getDay() === 0) return 7;
  return date.getDay();
} // 3 января 2012 года
alert(getLocalDay(date3));

//-----------------------------task-4-----------------------------//
/*Какой день месяца был много дней назад?
Создайте функцию getDateAgo(date, days), возвращающую число, которое было days дней назад от даты date.
К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
Функция должна надёжно работать при значении days=365 и больших значениях:
P.S. Функция не должна изменять переданный ей объект date.*/
let date4 = new Date(2015, 0, 2);
function getDateAgo(date, num) {
  const dateUnix = date.getTime() - num * 24 * 60 * 60 * 1000;
  return new Date(dateUnix);
}
alert(getDateAgo(date4, 1)); // 1, (1 Jan 2015)
console.log(date4);
alert(getDateAgo(date4, 2)); // 31, (31 Dec 2014)
console.log(date4);
alert(getDateAgo(date4, 365)); // 2, (2 Jan 2014)
console.log(date4);

//-----------------------------task-5-----------------------------//
/*Последнее число месяца?
Напишите функцию getLastDayOfMonth(year, month), возвращающую последнее число месяца. Иногда это 30, 31 или даже февральские 28/29.

year – год из четырёх цифр, например, 2012.
month – месяц от 0 до 11.
К примеру, getLastDayOfMonth(2012, 1) = 29 (високосный год, февраль).*/
function getLastDayOfMonth(year, month) {
  let days = new Date(year, month, 32).getDate();
  return 32 - days;
}
console.log(getLastDayOfMonth(2012, 2)); // 29
//-----------------------------task-6-----------------------------//
/*Сколько сегодня прошло секунд?
важность: 5
Напишите функцию getSecondsToday(), возвращающую количество секунд с начала сегодняшнего дня.

Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

getSecondsToday() == 36000 // (3600 * 10)
Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/
function getSecondsToday() {
  const dateNow = new Date();
  const secNow =
    dateNow.getHours() * 60 * 60 +
    dateNow.getMinutes() * 60 +
    dateNow.getSeconds();

  return secNow;
}
console.log(getSecondsToday());
//-----------------------------task-7-----------------------------//
/*Сколько секунд осталось до завтра?
важность: 5
Создайте функцию getSecondsToTomorrow(), возвращающую количество секунд до завтрашней даты.

Например, если сейчас 23:00, то:

getSecondsToTomorrow() == 3600
P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения сегодняшней даты.*/
function getSecondsToTomorrow() {
  const dateNow = new Date();
  const secNow =
    dateNow.getHours() * 60 * 60 +
    dateNow.getMinutes() * 60 +
    dateNow.getSeconds();

  return 24 * 60 * 60 - secNow;
}
console.log(getSecondsToTomorrow());
//-----------------------------task-8-----------------------------//

/*Форматирование относительной даты

Напишите функцию formatDate(date), форматирующую date по следующему принципу:

Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.*/
function formatDate(date) {
  const dateNow = date.getTime();
  const seconds = (new Date().getTime() - dateNow) / 1000;

  if (seconds < 1) {
    return "прямо сейчас";
  } else if (seconds < 60) {
    return `${seconds} сек. назад`;
  } else if (seconds < 3600) {
    return `${seconds / 60} мин. назад`;
  } else {
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const month =
      date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const fullYear = date.getFullYear();
    const hours =
      date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes =
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    return `${day}.${month}.${fullYear} ${hours}:${minutes}`;
  }
}

alert(formatDate(new Date(new Date() - 1))); // "прямо сейчас"

alert(formatDate(new Date(new Date() - 30 * 1000))); // "30 сек. назад"

alert(formatDate(new Date(new Date() - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата
alert(formatDate(new Date(new Date() - 86400 * 1000)));
