function mul(a, b) {
  return a * b;
};

let double = mul.bind(null, 2);




function addOne(x) {
  return x + 1;
}

function timesTwo(x) {
  return x * 2;
}

function compose(f1, f2) {
  return function(value) {
    return f1(f2(value));
  };
}

let addOneTimesTwo = compose(timesTwo, addOne);
let timesTwoAddOne = compose(addOne, timesTwo);



let width = "200px";
let amount = 2;

let object = {
  width,
  amount
};


let propName = "NAME";

let student = {
  [propName.toLowerCase()]: "John"
};



async function f() {

  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });

  let result = await promise;

  alert(result);
}


function loadJson(url) {
  return fetch(url)
    .then(response => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error(response.status);
      }
    })
}

loadJson('no-such-user.json') 
  .catch(alert);





