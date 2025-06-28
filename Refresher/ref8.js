//Refresher8: Arrays

const fruits = ["Apple", "Banana", "Mango"];

// for (let i = 1; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

fruits.push("Durian", "Avocado", "Dragonfruit", "Kiwi");
fruits.pop();
fruits.shift();
fruits.unshift("Pineapple", "Grapes");
fruits.splice(2, 1, "Orange", "Peach");



for (let fruit of fruits) {
    console.log(fruit);
}
