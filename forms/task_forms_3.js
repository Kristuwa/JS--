/*Депозитный калькулятор
Создайте интерфейс, позволяющий ввести сумму банковского вклада и процент, а затем рассчитать, какая это будет сумма через заданный промежуток времени.

Демо-версия:
Любое изменение введённых данных должно быть обработано немедленно.

Формула:

// initial: начальная сумма денег
// interest: проценты, например, 0.05 означает 5% в год
// years: сколько лет ждать
let result = Math.round(initial * (1 + interest) ** years);*/

let resultRef = document.querySelector("#height-after");
let moneyBefore = document.querySelector("#money-before");
let moneyAfter = document.querySelector("#money-after");

let form = document.querySelector(".calculator");

moneyBefore.innerHTML = form.money.value;

form.money.addEventListener("input", onChange);
form.months.addEventListener("change", onChange);
form.interest.addEventListener("input", onChange);

function onChange(e) {
  let initial = +form.money.value;
  let interest = form.interest.value * 0.01;
  let years = form.months.value / 12;

  let result = Math.round(initial * (1 + interest) ** years);

  moneyBefore.innerHTML = form.money.value;
  moneyAfter.innerHTML = result;
  resultRef.style.height = (result / form.money.value) * 100 + "px";
}
