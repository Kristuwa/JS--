//-------------------------------task-1--------------------------------/
/*Создайте декоратор spy(func), который должен возвращать обёртку, которая сохраняет все вызовы функции в своём свойстве calls.

Каждый вызов должен сохраняться как массив аргументов.

Например:


P.S.: Этот декоратор иногда полезен для юнит-тестирования. Его расширенная форма – sinon.spy – содержится в библиотеке Sinon.JS.*/
function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args);
    return func.apply(this, args);
  }

  wrapper.calls = [];

  return wrapper;
}

function work(a, b) {
  alert(a + b); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert("call:" + args.join()); // "call:1,2", "call:4,5"
}

//-------------------------------task-2--------------------------------/
/*Создайте декоратор delay(f, ms), который задерживает каждый вызов f на ms миллисекунд. Например:



// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс
Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».

В приведённом выше коде f – функция с одним аргументом, но ваше решение должно передавать все аргументы и контекст this.*/

function delay(func, time) {
  return function () {
    setTimeout(() => func.apply(this, arguments), time);
  };
}

function f(x) {
  alert(x);
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);
f1000("321");
f1500("31");
//-------------------------------task-3--------------------------------/
// /*Декоратор debounce

// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем debounce, это гарантирует, что все остальные вызовы будут игнорироваться в течение ms.*/
function debounce(func, time) {
  let state = false;

  return function () {
    if (state) return;

    func.apply(this, arguments);

    state = true;

    setTimeout(() => (state = false), time);
  };
}

let func = debounce(alert, 1000);

func(1); // выполняется немедленно
func(2); // проигнорирован

setTimeout(() => func(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => func(4), 1100); // выполняется
setTimeout(() => func(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
//-------------------------------task-4--------------------------------/
/*Тормозящий (throttling) декоратор
важность: 5
Создайте «тормозящий» декоратор throttle(f, ms), который возвращает обёртку, передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые попадают в период «торможения», игнорируются.*/
function funct(a) {
  console.log(a);
}

function throttle(func, time) {
  let state = false;
  let savedArgs;
  let savedThis;

  function wrapper() {
    if (state) {
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments);

    state = true;

    setTimeout(function () {
      state = false;
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, time);
  }

  return wrapper;
}

// f1000 передаёт вызовы f максимум раз в 1000 мс
let funct1000 = throttle(funct, 1000);

funct1000(1); // показывает 1
funct1000(2); // (ограничение, 1000 мс ещё нет)
funct1000(3); // (ограничение, 1000 мс ещё нет)

// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
