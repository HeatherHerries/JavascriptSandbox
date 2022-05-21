// Dates & Times
const today = new Date();
let birthday = new Date("9-30-1975");
birthday = new Date("July 15 1983");
birthday = new Date("6/23/1954");

let val;

val = today.getMonth();
val = today.getDate();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();
val = today.getTime();

console.log(val);

// Date Manipulation

birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1920);
birthday.setHours(3);
birthday.setMinutes(20);
birthday.setSeconds(22);

console.log(birthday);
