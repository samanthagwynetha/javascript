// Refresher5: Do While Loop Guessing Game
// This code implements a simple guessing game where the user has to guess a secret number between 1 and 10.

const prompt = require('prompt-sync')();

const secret = 7;
let guess = Number(prompt("Guess the secret number (1-10): "));

while (guess !== secret) {
    if (guess < secret) {
        console.log("Too low, try again");
    } else if (guess > secret) {
        console.log("Too high, try again");
    }  
    guess = Number(prompt("Guess again: "));

}

console.log("You guessed it, rorrr");