//---------------------------task-1-----------------------------//

/*Изменяем "prototype"
важность: 5
В коде ниже мы создаём нового кролика new Rabbit, а потом пытаемся изменить его прототип.

Сначала у нас есть такой код:*/

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

alert(rabbit.eats); // true
// 1. Добавим одну строчку (выделенную в коде ниже). Что вызов alert покажет нам сейчас?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit1 = new Rabbit();

Rabbit.prototype = {};

alert(rabbit1.eats); // true
// 2.…А если код такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit3 = new Rabbit();

Rabbit.prototype.eats = false;

alert(rabbit3.eats); // false
// 3.Или такой (заменили одну строчку)?

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit4 = new Rabbit();

delete rabbit4.eats;

alert(rabbit4.eats); // true
// 4.Или, наконец, такой:

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
};

let rabbit5 = new Rabbit();

delete Rabbit.prototype.eats;

alert(rabbit5.eats); // undefined */

//---------------------------task-2-----------------------------//

/*Создайте новый объект с помощью уже существующего
важность: 5
Представьте, что у нас имеется некий объект obj, созданный функцией-конструктором – мы не знаем какой именно, но хотелось бы создать ещё один объект такого же типа.

Можем ли мы сделать так?

let obj2 = new obj.constructor();
Приведите пример функции-конструктора для объекта obj, с которой такой вызов корректно сработает. И пример функции-конструктора, с которой такой код поведёт себя неправильно.*/
//вызов корректно сработает
function Animal(name) {
  this.name = name;
}

let animal = new Animal("Rabbit");
let animal2 = new animal.constructor("Fox");

alert(animal2.name);
//вызов не сработает корректно
function Person(name) {
  this.name = name;
}
Person.prototype = {};

let person = new Person("Alex");
let person2 = new person.constructor("Nike");

alert(person2.name);
