const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 24;

// Compare the distance first to identify a near miss.
if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else if (userGuess >= secretNumber - 3 && userGuess <= secretNumber + 3) {
  console.log("Very close!");
} else if (userGuess > secretNumber) {
  console.log("Too high");
} else {
  console.log("Too low");
}

console.log(`Secret number: ${secretNumber}, your guess: ${userGuess}`);
