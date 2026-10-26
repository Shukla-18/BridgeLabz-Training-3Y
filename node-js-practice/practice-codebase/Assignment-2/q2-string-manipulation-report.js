"use strict";
const productName = " wireless headphones PRO ";
const titleCase = productName.trim().toLowerCase().split(" ")
  .map((word) => word[0].toUpperCase() + word.slice(1))
  .join(" ");
const cleanedTitle = titleCase.replace("Pro", "Pro Edition");

// Formatting happens before the display length is calculated.
console.log(`Title: ${cleanedTitle}`);
console.log(`Length: ${cleanedTitle.length}`);
