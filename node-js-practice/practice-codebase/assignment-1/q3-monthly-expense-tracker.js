const expenses = [12000, 2500, 15000, 3000, 2000];
const categoryNames = ["Food", "Travel", "Rent", "Bills", "Leisure"];

// Add each category expense to calculate the monthly total.
let totalExpense = 0;
for (const expense of expenses) {
  totalExpense += expense;
}

const averageExpense = totalExpense / expenses.length;
const taxAmount = totalExpense * 0.1;
totalExpense += taxAmount;

console.log(`Categories: ${categoryNames.join(", ")}`);
console.log(`Total before tax: ₹${(totalExpense - taxAmount).toFixed(2)}`);
console.log(`Average expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: ₹${totalExpense.toFixed(2)}`);
