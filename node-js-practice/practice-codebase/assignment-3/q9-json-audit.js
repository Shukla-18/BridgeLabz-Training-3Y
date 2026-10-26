"use strict";
const rawData = ['{"user":"Alex","age":25}', '{"id":2}', '{invalid}', '{"user":"Mina","age":"22"}'];
const cleanUsers = [];

for (let index = 0; index < rawData.length; index += 1) {
  try {
    const record = JSON.parse(rawData[index]);
    if (record.user === undefined || record.age === undefined) throw new Error("Missing user or age");
    record.age = Number(record.age);
    if (Number.isNaN(record.age)) throw new Error("Invalid age");
    if (record.age >= 18) cleanUsers.push(record);
  } catch (error) {
    console.log(`Line ${index + 1}: ${error.message}`);
  }
}
console.log("Valid adult users:", cleanUsers);
