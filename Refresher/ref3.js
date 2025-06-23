const prompt = require('prompt-sync')()

const input = prompt('Enter your age: ')
const age = Number(input)

if (age >= 18 && age <= 120) {
    console.log('You are an adult.')
} else if (age < 18 && age >= 0) {
    console.log('You are a minor.')
} else {
    console.log('Invalid input. Please enter a valid number.')
}