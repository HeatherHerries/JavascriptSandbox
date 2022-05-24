// Removing and Replacing Elements in the DOM

// Replace an Element
// Create Element
const newHeading = document.createElement("h2");

// Add Id
newHeading.id = "task-title";

// New Text Node
newHeading.appendChild(document.createTextNode("Task List"));

// Get the old heading
const oldHeading = document.getElementById("task-title");
const cardAction = document.querySelector(".card-action");

// Replace
cardAction.replaceChild(newHeading, oldHeading);

// Remove Element
const lis = document.querySelectorAll("li");
const list = document.querySelector("ul");

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[3]);

// Classes and Attributes
const firstLi = document.querySelector("li:first-child");
const link = firstLi.children[0];

let val;
val = link.className;
val = link.classList;
val = link.classList[0];
link.classList.add("test");
link.classList.remove("test");
val = link;

// Attributes
val = link.getAttribute("href");
val = link.setAttribute("href", "http://google.com");
val = link.hasAttribute("href");

console.log(val);
