// Strings Methods and Concatenation

const firstName = "Heather";
const lastName = "Herries";
const age = 46;
const string = "Hi My name is Heather";

let val;
val = firstName + lastName;

// Concatenation
val = firstName + " " + lastName;
val = "Hello my name is " + firstName + " and I am " + age;

// Appending
val = "Kristen ";
val += "Smith";

// length
val =
  firstName.length; /* this will count the amount of characters in the string */

// concat()
val = firstName.concat(" ", lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// slice()
val = firstName.slice(0, 4);

// split()
val = string.split(
  " "
); /* this will turn a string into an array split at the spaces */

// replace()
val = string.replace("Heather", "Mariam");

// includes()
val = string.includes("Hi");
console.log(val);
