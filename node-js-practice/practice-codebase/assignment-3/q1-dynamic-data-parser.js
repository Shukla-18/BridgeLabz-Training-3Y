"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidValues = [];

for (const value of apiData) {
  const numberValue = Number(value);
  const isInvalid = value === undefined || (typeof value === "string" && (value.trim() === "" || Number.isNaN(numberValue)));
  if (isInvalid) {
    invalidValues.push(value);
    console.log(`Invalid numeric value: ${String(value)} | Number: ${numberValue} | Boolean: ${Boolean(value)} | String: ${String(value)}`);
  } else {
    validNumbers.push(numberValue);
    console.log(`Value: ${value} | Number: ${numberValue} | Boolean: ${Boolean(value)} | String: ${String(value)}`);
  }
}
console.log("Valid numbers:", validNumbers);
console.log("Invalid values:", invalidValues);
