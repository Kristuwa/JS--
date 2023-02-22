//--------------------------------------task-1-----------------------------------//
/*Допустим, у нас есть массив arr.
Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.*/
function unique(arr) {
  let uniqueArr = new Set(arr);
  return [...uniqueArr];
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(values)); // Hare,Krishna,:-O
//--------------------------------------task-2-----------------------------------//
/*Отфильтруйте анаграммы
Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.
Например:
nap - pan
ear - are - era
cheaters - hectares - teachers
Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.*/
let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
  let map = new Map();
  for (let elem of arr) {
    let anagramm = elem.toLowerCase().split("").sort().join("");
    map.set(anagramm, elem);
  }
  return [...map.values()];
}
alert(aclean(array)); // "nap,teachers,ear" или "PAN,cheaters,era"
//--------------------------------------task-3-----------------------------------//
/*Перебираемые ключи
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними, например, применить метод .push.
Но это не выходит:
let map = new Map();
map.set("name", "John");
let keys = map.keys();
// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
Почему? Что нужно поправить в коде, чтобы вызов keys.push сработал?*/
let map = new Map();
map.set("name", "John");
let keys = [...map.keys()]; //так как у нас keys перебираемый объект, то мы в него не можем пушить, нужно его преобразовать в массив
keys.push("more");
console.log(keys);
