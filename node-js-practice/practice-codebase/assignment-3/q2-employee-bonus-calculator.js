"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" }
];

for (const employee of employees) {
  try {
    if (!employee.name || employee.salary === undefined || employee.years === undefined) throw new Error("Missing employee property");
    const salary = Number(employee.salary);
    const years = Number(employee.years);
    if (Number.isNaN(salary) || Number.isNaN(years)) throw new Error("Invalid salary or years");
    const bonus = salary * (years > 3 ? 0.1 : 0.05);
    console.log(`${employee.name}: salary ₹${salary}, years ${years}, bonus ₹${bonus}`);
  } catch (error) {
    console.log(`Employee error: ${error.message}`);
  }
}
