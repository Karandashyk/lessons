

var obj = {
    testKey: 'test'
};

function foo() {
    console.log(this.testKey)
}

foo(); // test


function foo(key) {
    console.log(this[key])
}

foo(); //test


var obj = {
    phrase: 'This is '
};
var arr = ['Ivan', 'Ivanov'];

function foo(firstName, lastName) {
    console.log(this.phrase + firstName + lastName);
}

foo(); // This is Ivan Ivanov


mul(2)(3) // 6