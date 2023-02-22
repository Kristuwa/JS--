//--------------------------------------task-1-----------------------------------//
/*Сумма свойств объекта
важность: 5
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.*/
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
function sumSalaries(salaries) {
  let total = 0;
  const values = Object.values(salaries);
  values.map((item) => (total += item));
  return total;
}

alert(sumSalaries(salaries)); // 650
//--------------------------------------task-2-----------------------------------//
/*Подсчёт количества свойств объекта
Напишите функцию count(obj), которая возвращает количество свойств объекта:


Постарайтесь сделать код как можно короче.

P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».*/

let user = {
  name: "John",
  age: 30,
};
function count(user) {
  let total = 0;
  for (let key in user) {
    total += 1;
  }
  return total;
}

alert(count(user)); // 2
