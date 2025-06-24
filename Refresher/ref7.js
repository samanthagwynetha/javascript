// Refresher7: For loops
// This code prints the multiplication table of 5 from 1 to 10
/*let num = 5;

for (let i = 1; i <= 10; i++) {
    console.log( `${num} x ${i} = ${num * i}`);
} */


// For in loop
/*const books = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925
}

for (let key in books) {
    console.log(`${key}: ${books[key]}`);
}*/


//For loop of
const books = ["Atomic Habits", "The Power of Habit", "Deep Work", "The 7 Habits of Highly Effective People"];

for (let book of books) {
    console.log(book);
}