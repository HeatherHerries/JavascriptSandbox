// Arrays and Array Methods
const number = [1, 2, 3, 4, 5];

//Array created with an array constructo
const cars = new Array("Buick", "Chevrolet", "Fiat", "Mazda");

const fruit = ["Apple", "Banana", "Orange", "Pear"];

// Arrays can be created with a mixture of data types

const mixed = [22, "Hello", true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// Get array length or how many items are in the array
val = number.length;

// Check if something is an array
val = Array.isArray(number);

// Get a single value
val = number[3];

// Insert into an array
number[2] = 100;

// Find index of a value
val = number.indexOf(100);

// MUTATING ARRAYS

// Add to the end of an array
number.push(250);

// Add to the beginning
number.unshift(45);

// Remove from end
number.pop();

// Remove from front
number.shift();

// Remove from values from within
number.splice(1, 3);

// Reverse the array
number.reverse();

// Concatenate Arrays
val = number.concat(cars);

// Sorting Arrays
val = fruit.sort();
console.log(number);
console.log(val);
