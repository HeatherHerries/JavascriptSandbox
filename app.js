let re;

// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharacter Symbols
// Must Start With
re = /^h/i;
// Must End With
re = /d$/i;
// Must Begin and Ends With
re = /^Hello$/i;
// Can Match Any One Character
re = /h.llo/i;
// Matches Any Character 0 or More Times
re = /h*llo/i;
// Optional Character
re = /gra?e?y/i;
// Escape Characters
re = /gra?e?y\?/i;

// String to Match
const str = "Grey?";

// Log Results
const result = re.exec(str);
console.log(result);

function reTest() {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
