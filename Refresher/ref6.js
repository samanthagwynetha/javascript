//Refresher6: Do While Loop Password Check
// This code implements a simple password check where the user has to enter the correct password to gain access.
// The loop continues until the correct password is entered.

const prompt = require ('prompt-sync')();

let password

do {
    password = prompt("Enter your password: ");
    if (password !== "password123") {
        console.log("Incorrect password");

    }
} while (password !== "password123"){
        console.log("Access granted");
}