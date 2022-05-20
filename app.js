// Numbers and Math Object

const num1 = 100;
const num2 = 50;
let val;

// Simple Math with Numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

console.log(val);

// Math Object
val = Math.PI;
val = Math.E;
val = Math.round(2.8); /* this will round to the nearest whole number. */
val = Math.ceil(2.4); /* this will round the number up. */
val = Math.floor(2.8); /* this will round down */
val = Math.sqrt(64); /* squareroot */
val = Math.abs(-3); /* absolute */
val = Math.pow(8, 2); /* power */
val = Math.min(6, 8, 30, 10); /* will return the minimum number */
val = Math.max(9, 393, 20, 30); /* this will return the maximum number */
val = Math.random(); /* this will return a random decimal number */
val = Math.floor(
  Math.random() * 20
); /* this will give you a random whole number up to 20 */

console.log(val);
