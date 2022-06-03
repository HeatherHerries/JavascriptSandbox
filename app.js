// Prototypal Inheritance

// Person Constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

//Greeting
Person.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("Heather", "Herries");

console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName);

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person Prototype Methods
Customer.prototype = Object.create(Person.prototype);

// Make Customer Prototype return Customer
Customer.prototype.constructor = Customer;

// Create Customer
const customer1 = new Customer(
  "Terrance",
  "Parker",
  "555-555-5555",
  "Platinum"
);

console.log(customer1);

//Customer Greeting
Customer.prototype.greeting = function() {
  return `Hello there ${this.firstName} ${this.lastName} welcome to Bakeology! Can I take your order?`;
};

console.log(customer1.greeting());
