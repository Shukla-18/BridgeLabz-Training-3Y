"use strict";
// var is hoisted as undefined; functions with their body; let/const stay in the TDZ.
var score = 50;
function announce() { console.log("Game started"); }
const status = "ready";
function startGame() { console.log(`Status: ${status}`); }

console.log(`Score: ${score}`);
announce();
startGame();

// Arrow functions are not callable before their const assignment.
const announceArrow = () => console.log("Arrow game started");
announceArrow();
