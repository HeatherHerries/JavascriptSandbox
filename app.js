// Event Listeners & The Event Object

// Add Event Listener

// Select the item from the DOM that we want to add the event listener to
document.querySelector(".clear-tasks").addEventListener("click", onClick);

function onClick(e) {
  let val;
  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // Event type
  val = e.type;

  // Timestamp
  val = e.timeStamp;

  // Coordinates event relative to the window
  val = e.clientY;
  val = e.clientX;

  // Coordinates event relative to element
  val = e.offsetY;
  val = e.offsetX;
  console.log(val);
}
