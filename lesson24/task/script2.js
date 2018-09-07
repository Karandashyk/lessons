function* myGenerator() {
    yield ‘first’;
    let input = yield ‘second’;
    yield input;
}

// Получаем объект генератора
let iterator = myGenerator();

// Запускаем генератор, доходим до первого yield
console.log(iterator.next()): // { value: ‘first’, done: false }

// Возобновляем(не передаем никакого значения), доходим до второго yield
console.log(iterator.next()); // { value: ‘second’, done: false }

// Возобновляем (передаем значение) доходим до последнего yield
console.log(iterator.next(‘third’)); // { value: ‘third’, done: false }

// Заканчивается работа (yield больше нет)
console.log(iterator.next()); // { value: undefined, done: true }

