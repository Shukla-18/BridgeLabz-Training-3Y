"use strict";
try {
  // The non-strict version permits duplicate parameters and accidental globals.
  const nonStrictResult = Function("function demo(a, a) { total = 10; const result = total; delete total; return result; } return demo(5, 10);")();
  console.log(`Non-strict result: ${nonStrictResult}; accidental globals are allowed.`);
  Function('"use strict"; function demo(a, a) {}')();
} catch (error) {
  console.log(`Strict-mode error: ${error.name} — duplicate parameters are illegal.`);
}
const correctDemo = (first, second) => first + second;
console.log(`ES6-safe result: ${correctDemo(5, 10)}`);
