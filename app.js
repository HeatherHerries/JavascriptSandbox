// Traversing the DOM
let val;

const list = document.querySelector("ul.collection");
const listItem = document.querySelector("li.collection-item:first-child");

val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeType;

// 1 - Element
// 2 - Attribute (deprecated)
// 3 - Text Node
// 8 - Comment
// 9 - Document Itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[0];
list.children[1].textContent = "Task Item";

// Get Children of Children
val = list.children[3].children;

// .firstChild
val = list.firstChild;

// .firstElementChild
val = list.firstElementChild;

// .lastChild
val = list.lastChild;

// .lastElementChild
val = list.lastElementChild;

// .childElementCount;
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling;
console.log(val);
