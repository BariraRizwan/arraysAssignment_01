//Task_1 : create an array named fruits that containsthe following string elements:
//"apple","banana","mango","orange"
let fruits = ["apple", "banana", "mango", "orange"];
console.log(fruits);
//Task_2 : declare an array named numbers that can contain only numbers elements and initialize it with the
// values 10,20,30,40
let numbers = [10, 20, 30, 40];
console.log(numbers);
//Task_3 : Access the third element of the friuts array and assign it to a variable named thirdFruit.
let thirdFruit = fruits[2];
console.log(thirdFruit);
//Task_4 : Change the second element of the number array to 25.
numbers[1] = 25;
console.log(numbers);
//Task_5 : Add the element "grape" to the end of the fruits array using the method.
fruits.push("grape");
console.log(fruits);
//Task_6 : Remove the last element from the fruits array using the  method and assign it to a variable named 
//lastFruit.
let lastFruit = fruits.pop();
console.log(lastFruit);
console.log(fruits);
//Task_7 : Remove the first element from the fruits array using the method and assign it to a variable named firtsFruits.
let firtsFruit = fruits.shift();
console.log(firtsFruit);
console.log(fruits);
//Task_8 : Add the element "kiwi" to the begining of the fruits array using the method 
fruits.unshift("kiwi");
console.log(fruits);
//Task_9 : Remove two elements from the fruits array starting from index 1 using the method.
fruits.splice(1, 2);
console.log(fruits);
//Task_10 : Insert an elements "pineapple" and "pear" at index 2 of the fruits array using the method.
fruits.splice(2, 3, "pineapple", "pear");
console.log(fruits);
//Task_11 : Create a new aray named citrusFruits that contains he first two elements of the fruits using the method
let citrusFruits = fruits.slice(0, 2);
console.log(citrusFruits);
//Task_12 : Create a new array named lastTwoFruits that contains the last two elements of the fruits array using the method.
let lastTwoFruits = fruits.slice(2, 4);
console.log(lastTwoFruits);
export {};
