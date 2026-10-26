"use strict";
const bonus = 5000;

function calculateSalary(isPermanent) {
  const salary = 40000;
  const totalSalary = isPermanent ? salary + bonus : salary;
  console.log(`Permanent: ${isPermanent}, total salary: ₹${totalSalary}`);
}

// The function reads the global bonus but never changes it.
calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus remains: ₹${bonus}`);
