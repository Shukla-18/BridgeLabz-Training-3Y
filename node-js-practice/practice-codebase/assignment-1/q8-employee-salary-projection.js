let currentSalary = 500000;
const annualIncrementRate = 8;
const salaryProjection = [];

// Update the salary at the start of each projected year.
for (let year = 1; year <= 5; year += 1) {
  currentSalary *= 1 + annualIncrementRate / 100;
  salaryProjection.push({ year, salary: Math.round(currentSalary) });
}

console.table(salaryProjection);
