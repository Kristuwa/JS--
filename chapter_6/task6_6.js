//----------------------------------------task-1--------------------------//

/*Установка и уменьшение значения счётчика

Измените код makeCounter() так, чтобы счётчик мог уменьшать и устанавливать значение:

counter() должен возвращать следующее значение (как и раньше).
counter.set(value) должен устанавливать счётчику значение value.
counter.decrease() должен уменьшать значение счётчика на 1.
Посмотрите код из песочницы с полным примером использования.

P.S. Для того, чтобы сохранить текущее значение счётчика, можно воспользоваться как замыканием, так и свойством функции. Или сделать два варианта решения: и так, и так.*/
function makeCounter() {
  function counter() {
    return counter.count++;
  }

  counter.count = 0;
  counter.set = function (value) {
    return (counter.count = value);
  };
  counter.decrease = function () {
    return (counter.count -= 1);
  };

  return counter;
}
let counter = makeCounter();
console.log(counter());
console.log(counter.set(5));
console.log(counter.decrease());
console.log(counter());
console.log(counter());
//----------------------------------------task-2--------------------------//
/*Напишите функцию sum, которая бы работала следующим образом:

sum(1)(2) == 3; // 1 + 2
sum(1)(2)(3) == 6; // 1 + 2 + 3
sum(5)(-1)(2) == 6
sum(6)(-1)(-2)(-3) == 0
sum(0)(1)(2)(3)(4)(5) == 15
P.S. Подсказка: возможно вам стоит сделать особый метод преобразования в примитив для функции.*/

function sum(a) {
  let currentSum = a;

  function f(b) {
    currentSum += b;
    return f;
  }

  f.toString = function () {
    return currentSum;
  };

  return f;
}

console.log(JSON.parse(sum(1)(2)));
console.log(JSON.parse(sum(5)(-1)(2)));
console.log(JSON.parse(sum(6)(-1)(-2)(-3)));
console.log(JSON.parse(sum(0)(1)(2)(3)(4)(5)));
