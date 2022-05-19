// var, let and const

var name = "John Doe";
console.log(name);

// You can reassign variables if they are 'var' or 'let'.
name = "Steve Smith";
console.log(name);

// Initialize a variable
var greeting;
console.log(greeting); /* this will return undefined */
greeting = "Hello"; /* this will define the variable */
console.log(greeting);

// Variables can only include letters, numbers, _, and $.
// Variables can't start with a number.
// Multiword regular variables best practice is to use camelcase.
var firstName = "John";
var first_name = "Sara"; /* Underscore convention */
var FirstName = "Tom"; /* Pascal case convention */

// LET

let catName = "Domino";
console.log(catName);
// You have the option to reassign the variable value
catName = "Achilles";
console.log(catName);

// CONST
const state = "Colorado";
console.log(state);
// The value of const will not be able to be changed. It will throw an error.

// You cannot not define a value to a const variable. That will throw an error.

// One thing to keep in mind with const is that the if you use const for an array or object those can be mutated with methods and what not, but you will not be able to directly reassign the values.
