const userName = "Pratham";
const age = 21;
const isStudent = true;
const skills = ["HTML", "CSS", "JavaScript"];
const address = { city: "Indore", country: "India" };
const middleName = null;
let preferredLanguage;

// Keep each value in one report row so console.table prints a single summary.
const dataSummary = [
  { label: "String", value: userName, type: typeof userName },
  { label: "Number", value: age, type: typeof age },
  { label: "Boolean", value: isStudent, type: typeof isStudent },
  { label: "Array", value: skills.join(", "), type: Array.isArray(skills) ? "array" : typeof skills },
  { label: "Object", value: JSON.stringify(address), type: typeof address },
  { label: "Null", value: middleName, type: typeof middleName },
  { label: "Undefined", value: preferredLanguage, type: typeof preferredLanguage }
];

console.table(dataSummary);
