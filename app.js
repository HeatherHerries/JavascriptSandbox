// Template Literals
const name = "Heather";
const age = 46;
const job = "Web Developer";
const city = "Denver";
let html;

// Without Template Strings (ES5)
html =
  "<ul><li>Name: " +
  name +
  "</li><li>Age: " +
  age +
  " </li><li>Job: " +
  job +
  " </li><li>City: " +
  city +
  " </li></ul>";

// With Template Strings (ES6)
html = `
<ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>Job: ${job}</li>
  <li>City: ${city}</li>  
</ul>
`;
document.body.innerHTML = html;
