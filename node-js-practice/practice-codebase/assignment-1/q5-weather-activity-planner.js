const temperature = 12;
const isRaining = false;
const windSpeed = 25;

// Either rain or a cold-and-windy combination requires an indoor plan.
const needsIndoorPlan = isRaining || (temperature < 15 && windSpeed > 20);

if (needsIndoorPlan && isRaining) {
  console.log("Stay indoors with hot coffee.");
} else if (needsIndoorPlan) {
  console.log("Too cold and windy — stay home.");
} else if (temperature > 35) {
  console.log("Go swimming.");
} else {
  console.log("Perfect day for a walk.");
}
