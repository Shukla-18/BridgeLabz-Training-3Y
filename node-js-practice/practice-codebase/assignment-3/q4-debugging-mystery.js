"use strict";
try {
  // This isolated example proves that strict mode rejects an undeclared assignment.
  Function('"use strict"; function showMessage() { greeting = "Welcome"; } showMessage();')();
} catch (error) {
  console.log(`Original error: ${error.name} — ${error.message}`);
}

function showMessage() {
  const greeting = "Welcome";
  console.log(greeting);
}
const watchGreeting = "Watch this value in the debugger";
console.log(watchGreeting);
showMessage();
