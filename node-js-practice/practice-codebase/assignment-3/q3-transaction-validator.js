"use strict";
const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];
const valid = [];
const invalid = [];

for (const transaction of transactions) {
  try {
    // breakpoint: inspect the transaction before validation.
    debugger;
    if (transaction === null) throw new Error("NullEntry");
    if (transaction.id === undefined || transaction.amount === undefined) throw new Error("MissingField");
    if (transaction.amount < 0) throw new Error("NegativeAmount");
    valid.push(transaction);
  } catch (error) {
    invalid.push({ transaction, error: error.message });
    console.log(`Rejected: ${error.message}`);
  }
}
console.log(`Successful: ${valid.length}, failed: ${invalid.length}`);
console.log("Valid:", valid);
console.log("Invalid:", invalid);
