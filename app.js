// Window Mothods, Objects and Properties

// Alert
alert("Well, Hello there!");

// Prompt
const input = prompt();
alert(input);

// Confirm
if (confirm("Are you sure you want to do that?")) {
  console.log("YES");
} else {
  console.log("NO");
}

// Get Outer Height and Width
let val;
val = window.outerHeight;

console.log(val);

val = window.outerWidth;

console.log(val);

// Get Inner Height and Width

val = window.innerHeight;

console.log(val);

val = window.innerWidth;

console.log(val);

// Scroll Points
val = window.scrollY;

console.log(val);

// Location Object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
console.log(val);

console.log(val);
