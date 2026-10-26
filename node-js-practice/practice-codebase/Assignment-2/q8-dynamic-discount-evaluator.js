"use strict";
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];
let discountedTotal = 0;

for (const product of cart) {
  const categoryDiscount = product.category === "electronics" ? 0.1 : product.category === "fashion" ? 0.05 : 0;
  discountedTotal += product.price * (1 - categoryDiscount);
}
const cartTotal = cart.reduce((sum, product) => sum + product.price, 0);
if (cartTotal > 50000) discountedTotal *= 0.95;

// Category discounts are calculated before the cart-level discount.
console.log(`Cart total: ₹${cartTotal}\nFinal total: ₹${discountedTotal.toFixed(2)}`);
