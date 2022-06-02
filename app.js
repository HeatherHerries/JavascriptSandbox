// Prototypes Explained

// Object Prototype
// Person Prototype

// Person Constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
}

// Calculate Age
Person.prototype.calculateAge = function() {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
};

const john = new Person("John", "Doe", "8-12-90");
const sara = new Person("Sara", "Johnson", "9-26-12");

console.log(sara);
console.log(john.calculateAge());
console.log(sara.getFullName());
sara.getsMarried("Smith");
console.log(sara.getFullName());
console.log(sara.hasOwnProperty("firstName"));
