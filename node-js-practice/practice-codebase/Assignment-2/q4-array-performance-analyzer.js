"use strict";
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const adjustedScores = scores.map((score) => score);
const passingScores = adjustedScores.filter((score) => score >= 50);
const averageScore = adjustedScores.reduce((sum, score) => sum + score, 0) / adjustedScores.length;

// Spread lets Math.max and Math.min inspect every array value.
console.log(`Scores: ${scores.join(", ")}\nHighest: ${Math.max(...scores)}\nLowest: ${Math.min(...scores)}\nAverage: ${averageScore.toFixed(2)}\nPassed: ${passingScores.length}`);
