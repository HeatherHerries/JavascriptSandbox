// If Statements and Comparison Operators

// General Syntax
// if(something) {
//   do something
// } else (
//   do something else
// )

const id = 100;

// Equal To
if (id == 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// Not Equal To
if (id != 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// Equal To Value & Type
if (id === 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// Not Equal To Value & Type
if (id !== 100) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// Test if undefined
let bird;

if (typeof bird !== "undefined") {
  console.log(`The Bird is a ${bird}`);
} else {
  console.log(`There is no bird`);
}

// Greater than or less than
if (id > 200) {
  console.log("CORRECT");
} else {
  console.log("INCORRECT");
}

// else if

const color = "yellow";

if (color === "red") {
  console.log("The color is red");
} else if (color === "blue") {
  console.log("The color is blue");
} else {
  console.log("The color is neither red nor blue");
}

// Logical Operators
const name = "Heather";
const age = 20;

// And &&
if (age > 0 && age < 12) {
  console.log(` ${name} is a child`);
} else if (age >= 13 && age <= 19) {
  console.log(`${name} is a teenager`);
} else {
  console.log(`${name} is an adult`);
}
// Or ||
if (age < 16 || age > 65) {
  console.log(`${name} can't enter the race`);
} else {
  console.log(`${name} can enter the race`);
}

// Ternary Operator (Shorthand for an if / else statement)
// General Syntax
// (something === something ? do something : do something else)

const syblingType = "brother";

console.log(
  syblingType === "sister" ? "This is a sister" : "This is a brother"
);
