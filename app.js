// Data Type Conversion

let val;

// Number to String
val = 5;
val = String(5);
val = String(4 + 4);

console.log(val);
console.log(typeof val);
console.log(val.length);

// Boolean to String
val = String(true);

console.log(val);
console.log(typeof val);
console.log(val.length);

// Date to String
val = String(new Date());

console.log(val);
console.log(typeof val);
console.log(val.length);

// Array to String
val = String([1, 2, 3, 4]);

console.log(val);
console.log(typeof val);
console.log(val.length);

// toString() method
val = (5).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);

// Values to a Number
val = "5"; /* this will throw an error until changed to a number */
val = Number("5");
val = Number(true); /* returns 1 */
val = Number(false); /* returns 0 */
val = Number(null); /* returns 0 */
val = Number("five"); /* returns NaN */
val = Number([1, 2, 3]); /* returns NaN */

// parseInt Method
val = parseInt("100"); /* this will not allow decimals */
val = parseFloat("100.3"); /* this will allow decimals */

console.log(val);
console.log(typeof val);
console.log(val.toFixed());
