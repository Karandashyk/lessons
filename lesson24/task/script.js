let scores = ['A', 'B', 'C'];
let one, two, three;

// 1. Простой пример
let [one, two, three] = scores;

// 2. Обмен значений
[one, two] = [two, one];

// 3. Возврат значений
function f() {
  return [1, 2, 3];
}
let [one, two, three] = f();
let [one, , three] = f();



let obj = {a: 1, b: 'A'};

// 1. Присвоение значений свойств объекта в переменные p и q
let {a, b} = obj;

// 2. Объявление и присвоение в переменные one и two
let {a: one, b: two} = obj;

// 3. Загрузка модулей
const { Module, main } = require('toolkit/Module');

let student = { 
  age: 22, 
  fullName: { 
      firstName: 'John',
      lastName: 'Doe'
  },
  marks: [{subject: 'Math', score: 4}, {subject: 'English', score: 3}]
};

// 4. Получение полей объекта-параметра функции
function getAge({age}) {
  return age;
}

function whoIs({fullName: {firstName: name}}){
  console.log("Firstname: " + name);
}

// 5. Деструктурирование во время обхода циклом
for (let {age: a, fullName: { firstName: f } } of student) {
  console.log("Student " + f + " is " + a);
}

// 6. Разбор массива
let { marks: [{ subject: name }] } = student;
