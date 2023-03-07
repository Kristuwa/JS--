//-------------------------------task-1--------------------------------/
/*Напишите функцию printNumbers(from, to), которая выводит число каждую секунду, начиная от from и заканчивая to.

Сделайте два варианта решения.

Используя setInterval.
Используя рекурсивный setTimeout.*/
// let timeId;
// function printNumbers(from, to) {
//   let i = from;
//   timeId = setInterval(() => {
//     if (i === to) {
//       clearInterval(timeId);
//     }
//     alert(i);
//     i += 1;
//   }, 1000);
// }
// printNumbers(3, 9);
let timeIdTimeout;
function printNumbersTimeout(from, to) {
  let i = from;

  function func() {
    alert(i);
    i += 1;

    timeIdTimeout = setTimeout(func, 1000);
    if (i === to + 1) {
      clearTimeout(timeIdTimeout);
      return;
    }
  }
  setTimeout(func, 1000);
}
printNumbersTimeout(3, 6);

//-------------------------------task-2--------------------------------/
/*Что покажет setTimeout?

В приведённом ниже коде запланирован вызов setTimeout, а затем выполняется сложное вычисление, для завершения которого требуется более 100 мс.

Когда будет выполнена запланированная функция?

После цикла.
Перед циклом.
В начале цикла.
Что покажет alert?

let i = 0;

setTimeout(() => alert(i), 100); // После цикла. 100000000

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}*/
