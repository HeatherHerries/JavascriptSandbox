// General Loops
// For Loop

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    console.log("2 is my favorite number");
    // continue will continue on with the rest of the loop instead of logging the result twice and then continuing
    continue;
  }

  if (i === 5) {
    console.log("The loop is stopped");
    // break will stop the lopp at this point.
    break;
  }

  console.log(i);
}

// While Loop
let i = 0;

while (i < 10) {
  console.log("Number " + i);
  i++;
}

// Do While Loop

let z = 0;

do {
  console.log("This is number " + z);
  z++;
} while (z < 10);

// Looping thru arrays

const fruit = ["apple", "orange", "cherry", "avacado"];

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

// forEach() Method
fruit.forEach(function(i) {
  console.log(i);
});

// map() Method
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Bruce" },
  { id: 3, name: "Ken" }
];

const names = users.map(function(user) {
  return user.name;
});

console.log(names);

const competitor = {
  firstName: "Heather",
  lastName: "Herries",
  age: 46
};

// For in loop
for (let x in competitor) {
  console.log(`${x} : ${competitor[x]}`);
}
