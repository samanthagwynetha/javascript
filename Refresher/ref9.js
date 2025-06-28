// const person = {
//     name: "Nimchom",
//     age: 22,
//     isStudent: true,
//     hobbies: ["reading", "meditation", "exercise"],
//     address: {
//         city: "Davao",
//         country: "Philippines"
//     }
// }

// // console.log(person.name);
// // console.log(person["age"]);
// // console.log(person.isStudent);
// // console.log(person.hobbies);
// // console.log(person.address.city);

// person.zipCode = "8000";
// delete person.isStudent;
// console.log(person);

// for (let key in person) {
//     console.log(`${key}: ${person[key]}`);
// }

// //Challenges 1:  Create an object car with brand, model, year — then print all key-value pairs.
// const car = {
//     brand: "Mazda",
//     model: "CX-5",
//     year: 2022
// }

// // Challenge 2: Add a new property color to the car object and update year to a newer value.
// car.year = 2025;
// car.color = "maroon";
// for (let key in car){
//     console.log(`${key}: ${car[key]}`)
// }



// Challenge 3: Create a student object that includes:
// A name
// An array of 3 favorite subjects
// A nested object address with city and zip
// Print the student’s city and first subject


const student = {
    name: "unah",
    favSubject: ["Science", "Sim4", "Math"],
    address: {
        city: "Davao",
        zip: 8000
    }
}

console.log(student.address.city)
console.log(student.favSubject[1])