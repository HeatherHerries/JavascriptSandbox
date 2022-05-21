// Object Literals
const person = {
  firstName: "Heather",
  lastName: "Herries",
  age: 46,
  hobbies: ["bowling", "art", "diy"],
  address: {
    city: "Denver",
    state: "CO"
  },
  getBirthYear: function() {
    return 2022 - this.age;
  }
};

let val = person;
val = person.firstName;
val = person.lastName;
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address;
val = person.address.state;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: "John", age: 30 },
  { name: "Sara", age: 25 }
];

for (let i = 0; i < people.length; i++) {
  console.log(people[i].age);
}
