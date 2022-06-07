// ES6 Classes
class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getsMarried(newLastName) {
    this.lastName = newLastName;
  }

  static addNumbers(x, y) {
    return x + y;
  }
}

const heather = new Person("Heather", "Herries", "09-30-1975");

heather.getsMarried("Baker");

console.log(heather);
console.log(heather.greeting());
console.log(heather.birthday);
console.log(heather.calculateAge());
console.log(Person.addNumbers(1, 2));
