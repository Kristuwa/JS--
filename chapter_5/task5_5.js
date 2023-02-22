//--------------------------------------task-1-----------------------------------//

/*Переведите текст вида border-left-width в borderLeftWidth
Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
То есть дефисы удаляются, а все слова после них получают заглавную букву.*/

function camelize(str) {
  const strToArr = str.split("");
  for (let i = 0; i < strToArr.length; i += 1) {
    if (strToArr[i] === "-") {
      strToArr.splice(i, 1);
      strToArr[i] = strToArr[i].toUpperCase();
    }
  }
  return strToArr.join("");
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));

//--------------------------------------task-2-----------------------------------//
/*Фильтрация по диапазону
Напишите функцию filterRange(arr, a, b), которая принимает массив arr, ищет элементы со значениями больше или равными a и меньше или равными b и возвращает результат в виде массива.
Функция должна возвращать новый массив и не изменять исходный.*/
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
let filtered = filterRange(arr, 1, 4);
alert(filtered); // 3,1 (совпадающие значения)
alert(arr); // 5,3,8,1 (без изменений)

//--------------------------------------task-3-----------------------------------//
/*Фильтрация по диапазону "на месте"
Напишите функцию filterRangeInPlace(arr, a, b), которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция должна изменять принимаемый массив и ничего не возвращать.*/
function filterRangeInPlace(arr1, a, b) {
  for (let elem of arr1) {
    if (!(elem >= a && elem <= b)) {
      arr1.splice(arr1.indexOf(elem), 1);
    }
  }
}
let arr1 = [5, 3, 8, 1];
filterRangeInPlace(arr1, 1, 4); // удалены числа вне диапазона 1..4
alert(arr1); // [3, 1]
console.log(arr1);

//--------------------------------------task-4-----------------------------------//
/*Сортировать в порядке по убыванию
важность: 4*/
let arr2 = [5, 2, 1, -10, 8];
arr2.sort((a, b) => b - a);
alert(arr2); // 8, 5, 2, 1, -10

//--------------------------------------task-5-----------------------------------//
/*У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.*/
let arr3 = ["HTML", "JavaScript", "CSS"];
function copySorted(arr) {
  return [...arr].sort();
}
let sorted = copySorted(arr3);

alert(sorted); // CSS, HTML, JavaScript
alert(arr3); // HTML, JavaScript, CSS (без изменений)

//--------------------------------------task-6-----------------------------------//

/*Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.
Задание состоит из двух частей.
Во-первых, реализуйте метод calculate(str), который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.
Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции. Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8
Для этой задачи не нужны скобки или сложные выражения.
Числа и оператор разделены ровно одним пробелом.
Не лишним будет добавить обработку ошибок.
*/

function Calculator() {
  this.operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
  };
  this.calculate = function (str) {
    let strToArr = str.split(" ");
    if (!this.operations[strToArr[1]]) {
      return "Нет такой операции";
    }
    return this.operations[strToArr[1]](+strToArr[0], +strToArr[2]);
  };
  this.addMethod = function (name, func) {
    this.operations[name] = func;
  };
}

let calc = new Calculator();

alert(calc.calculate("3 + 7")); // 10
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8
alert(powerCalc.calculate("2 // 3"));
//--------------------------------------task-7-----------------------------------//
/*У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.*/
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map((item) => item.name);

alert(names); // Вася, Петя, Маша

//--------------------------------------task-8-----------------------------------//
/*Трансформировать в объекты
У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.
Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name и surname.*/
let vasya1 = { name: "Вася", surname: "Пупкин", id: 1 };
let petya1 = { name: "Петя", surname: "Иванов", id: 2 };
let masha1 = { name: "Маша", surname: "Петрова", id: 3 };

let users1 = [vasya1, petya1, masha1];

let usersMapped = users1.map((item, i, arr) => ({
  id: i + 1,
  fullName: `${item.name} ${item.surname}`,
}));
console.log(usersMapped);
/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // Вася Пупкин

//--------------------------------------task-9-----------------------------------//
/*Отсортировать пользователей по возрасту
Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.*/
let vasya2 = { name: "Вася", age: 25 };
let petya2 = { name: "Петя", age: 30 };
let masha2 = { name: "Маша", age: 28 };

let arr4 = [vasya2, petya2, masha2];
function sortByAge(arr) {
  return arr.sort((a, b) => a.age - b.age);
}
sortByAge(arr4);
console.log(arr4);
// теперь: [vasya2, masha2, petya2]
alert(arr4[0].name); // Вася
alert(arr4[1].name); // Маша
alert(arr4[2].name); // Петя
//--------------------------------------task-10-----------------------------------//
/*Перемешайте массив
Напишите функцию shuffle(array), которая перемешивает (переупорядочивает случайным образом) элементы массива.
Многократные прогоны через shuffle могут привести к разным последовательностям элементов.
Все последовательности элементов должны иметь одинаковую вероятность. Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д., с равной вероятностью каждого случая.*/
let arr5 = [1, 2, 3];

function shuffle(array) {
  let j;
  let item;
  for (let i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    item = array[j];
    array[j] = array[i];
    array[i] = item;
  }
  return array;
}

console.log(shuffle(arr5));
alert(shuffle(arr5));
//--------------------------------------task-11-----------------------------------//
/*Напишите функцию getAverageAge(users), которая принимает массив объектов со свойством age и возвращает средний возраст.
Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.*/
let vasya3 = { name: "Вася", age: 25 };
let petya3 = { name: "Петя", age: 30 };
let masha3 = { name: "Маша", age: 29 };

let arr6 = [vasya3, petya3, masha3];
function getAverageAge(arr) {
  return (
    arr.reduce((acc, item) => {
      acc += item.age;
      return acc;
    }, 0) / arr.length
  );
}
alert(getAverageAge(arr6)); // (25 + 30 + 29) / 3 =28
//--------------------------------------task-12-----------------------------------//
/*Оставить уникальные элементы массива
Пусть arr – массив строк.
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr.*/

function unique(arr) {
  let uniqueArr = [];
  for (let elem of arr) {
    if (!uniqueArr.includes(elem)) {
      uniqueArr.push(elem);
    }
  }
  return uniqueArr;
}

let strings = [
  "кришна",
  "кришна",
  "харе",
  "харе",
  "харе",
  "харе",
  "кришна",
  "кришна",
  ":-O",
];

alert(unique(strings)); // кришна, харе, :-O
//--------------------------------------task-13-----------------------------------//
/*Создайте объект с ключами из массива
Допустим, мы получили массив пользователей в виде {id:..., name:..., age:... }.
Создайте функцию groupById(arr), которая создаст из него объект с id в качестве ключа и элементами массива в качестве значений.*/
let users2 = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];
function groupById(arr) {
  return arr.reduce((acc, item) => {
    acc[item.id] = item;
    return acc;
  }, {});
}
let usersById = groupById(users2);
console.log(usersById);
/*
 // после вызова у нас должно получиться:
 
 usersById = {
	john: {id: 'john', name: "John Smith", age: 20},
	ann: {id: 'ann', name: "Ann Smith", age: 24},
	pete: {id: 'pete', name: "Pete Peterson", age: 31},
 }
 */
