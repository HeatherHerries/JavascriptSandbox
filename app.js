// Constructors and the 'this' Keyword
// Person Constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);
  this.calcAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
}

// const heather = new Person("Heather", dob);
// const john = new Person("John", 20);

// console.log(john.age, john.name);

const heather = new Person("Heather", "9-30-1975");
console.log(heather.calcAge());
