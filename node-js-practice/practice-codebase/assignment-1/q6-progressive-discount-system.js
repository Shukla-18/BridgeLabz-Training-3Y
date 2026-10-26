const purchaseTotal = 6500;
let discountPercentage = 0;

// Choose the highest discount tier the purchase total qualifies for.
if (purchaseTotal >= 10000) {
  discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
  discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
  discountPercentage = 5;
}

const finalPrice = Math.round(purchaseTotal * (1 - discountPercentage / 100));
console.log(`Original total: ₹${purchaseTotal}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Final price: ₹${finalPrice}`);
