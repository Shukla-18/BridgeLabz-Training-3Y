"use strict";
function outer() {
  // The outer var count is hoisted as undefined before this log.
  console.log(`Outer before assignment: ${count}`);
  var count = 5;
  const inner = () => {
    // This local var is separately hoisted as undefined inside the inner call.
    console.log(`Inner before assignment: ${count}`);
    var count = 10;
    console.log(`Inner after assignment: ${count}`);
  };
  inner();
  console.log(`Outer after inner: ${count}`);
}

// breakpoint: step from outer into inner to observe separate call-stack frames.
outer();
