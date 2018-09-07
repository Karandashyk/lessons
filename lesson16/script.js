// --------- Parent Class ------------
function Human(name) {
  this.name = name;
  this.speed = 0;
}

// Methods are stored in the prototype
Human.prototype.speak = function() {
  alert(this.name + " speaks!");
}

// --------- Descendant Class -----------
function Student(name) {
  Human.apply(this, arguments);
}

// Inherit prototype methods
Student.prototype = Object.create(Human.prototype);

// Save constructor 
Student.prototype.constructor = Student;

// Descendant methods
Student.prototype.learn = function() {
  // To expand parent method
  Human.prototype.speak.apply(this);
  alert( this.name + " study hard!" );
};

var student = new Student('John');
student.learn();