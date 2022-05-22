// Functions Expressions & Declarations

// Function Declaration
function greet(firstName, lastName) {
  //console.log("Hello");
  return "Hello " + firstName + " " + lastName;
}

// greet()
console.log(greet("Heather", "Herries"));

// Function Expression
const square = function(x) {
  return x * x;
};

console.log(square(8));

// Immediately Invokable Function Expressions - IIFE's
(function() {
  console.log("IIFE ran..");
})();

(function(name) {
  console.log("Hello " + name);
})("Heather");

// Property Methods
const todo = {
  add: function() {
    console.log("Add Todo...");
  },
  edit: function(id) {
    console.log(`Edit todo ${id}`);
  }
};

todo.delete = function() {
  console.log("Delete Todo...");
};

todo.add();
todo.edit(22);
todo.delete();
