//  Refresher 2: User Input with prompt-sync
// This code imports the 'prompt-sync' package and uses it to get user input from the console.

const prompt = require('prompt-sync')()

const input = prompt('Please enter some input: ')
console.log(input)

