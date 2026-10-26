"use strict";
const rows = 5;
for (let row = 1; row <= rows; row += 1) {
  let line = "";
  for (let column = 1; column <= row; column += 1) line += "* ";
  console.log(line.trim());
}
// Replacing let with var still prints this pattern, but leaks loop variables outside the loop.
for (var demoRow = 1; demoRow <= 1; demoRow += 1) console.log("var loop demonstration");
console.log(`var demoRow remains available after its loop: ${demoRow}`);
