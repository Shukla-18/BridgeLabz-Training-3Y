"use strict";
let count = 0;

function increment() {
  count += 1;
  function showCount() { console.log(`Count: ${count}`); }
  showCount();
}

function decrement() {
  count -= 1;
  function showCount() { console.log(`Count: ${count}`); }
  showCount();
}

// Function calls simulate increment and decrement button clicks.
increment();
increment();
decrement();
