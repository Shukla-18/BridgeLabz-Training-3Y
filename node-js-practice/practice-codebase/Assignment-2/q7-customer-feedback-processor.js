"use strict";
const feedback = "Great product! Fast delivery and amazing sound quality!";
const words = feedback.trim().split(/\s+/);
const containsNegativeWord = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

// A comment is positive only when neither negative keyword occurs.
console.log(`Word count: ${words.length}`);
console.log(containsNegativeWord ? "Needs Improvement" : "Positive Feedback");
