//-----------------------------task-1-----------------------------//

/*Деструктурирующее присваивание
У нас есть объект:

Напишите деструктурирующее присваивание, которое:

свойство name присвоит в переменную name.
свойство years присвоит в переменную age.
свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
*/

let user = {
  name: "John",
  years: 30,
};
// ваш код должен быть с левой стороны:
const { name, years: age, isAdmin = false } = user;

alert(name); // John
alert(age); // 30
alert(isAdmin); // false

//-----------------------------task-2-----------------------------//

/*Максимальная зарплата
У нас есть объект salaries с зарплатами:
Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.
Если объект salaries пустой, то нужно вернуть null.
Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.*/

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function topSalary(salaries) {
  if (!salaries) {
    return null;
  }
  let nameHasMaxSalary = "";
  let maxSalary = 0;
  const entries = Object.entries(salaries);
  for (let [name, salary] of entries) {
    if (salary > maxSalary) {
      maxSalary = salary;
      nameHasMaxSalary = name;
    }
  }
  return nameHasMaxSalary;
}

alert(topSalary(salaries));
