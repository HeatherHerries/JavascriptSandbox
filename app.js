// Mouse Events

const clearBtn = document.querySelector(".clear-tasks");
const card = document.querySelector(".card");
const heading = document.querySelector("h5");

// Run Click Event
clearBtn.addEventListener("click", runEvent);

// Run Double Click Event
clearBtn.addEventListener("dblclick", runEvent);

// Run Mousedown Event (Click and Hold)
clearBtn.addEventListener("mousedown", runEvent);

// Run Mouseup Event (Release Click)
clearBtn.addEventListener("mouseup", runEvent);

// Run Mouseenter Event
card.addEventListener("mouseenter", runEvent);

// Run Mouseleave Event
card.addEventListener("mouseleave", runEvent);

// Run Mouseover Event
card.addEventListener("mouseover", runEvent);

// Run Mousemove Event
card.addEventListener("mousemove", runEvent);

// Run Mouseout Event
card.addEventListener("mouseout", runEvent);

// Create an Event Handler
function runEvent(e) {
  console.log(`EVENT TYPE: ${e.type}`);

  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
