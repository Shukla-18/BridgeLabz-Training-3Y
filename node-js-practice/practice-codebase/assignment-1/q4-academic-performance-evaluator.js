const subjectMarks = [88, 76, 91, 82, 87];
const totalMarks = subjectMarks.reduce((sum, mark) => sum + mark, 0);
const averageMarks = totalMarks / subjectMarks.length;
const overallPercentage = (totalMarks / (subjectMarks.length * 100)) * 100;

// A failing subject prevents promotion even when the overall score is high.
let result;
if (subjectMarks.some((mark) => mark < 35)) {
  result = "Detained";
} else if (overallPercentage >= 85) {
  result = "Promoted with Distinction";
} else if (overallPercentage >= 50) {
  result = "Promoted";
} else {
  result = "Detained";
}

console.log(`Average: ${averageMarks.toFixed(2)}`);
console.log(`Overall percentage: ${overallPercentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
