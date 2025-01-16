const marvel_heros = ["thor" , "Ironman" , "spiderman"]
const dc = ["superman" , 'flash' , 'batman']

// console.log(marvel_heros.concat(dc))

const new_heros = [...marvel_heros,...dc]
console.log(new_heros)

const another_array = [1,2,3,4,[5,6,7] , [6,7,[8,9]]]

const real_array = another_array.flat(2)
console.log(real_array)

/*
Arrays in JavaScript
An array is a data structure used to store multiple values in a single variable. Arrays in JavaScript can hold any type of data (e.g., strings, numbers, objects, etc.) and are very flexible.

1. Creating Arrays
There are several ways to create an array:

Using Square Brackets:
javascript
Copy
Edit
let fruits = ["apple", "banana", "cherry"];
Using the Array Constructor:
javascript
Copy
Edit
let numbers = new Array(1, 2, 3);
Note: The square bracket syntax is simpler and more commonly used.

2. Accessing Array Elements
Array elements are accessed using their index (starting from 0).

javascript
Copy
Edit
let fruits = ["apple", "banana", "cherry"];
console.log(fruits[0]); // Output: apple
console.log(fruits[2]); // Output: cherry
3. Modifying Array Elements
You can change the value of an element by assigning a new value to its index.

javascript
Copy
Edit
let fruits = ["apple", "banana", "cherry"];
fruits[1] = "orange";
console.log(fruits); // Output: ["apple", "orange", "cherry"]
4. Array Properties
length:
The length property gives the number of elements in the array.

javascript
Copy
Edit
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.length); // Output: 3
5. Array Methods
JavaScript provides many built-in methods to work with arrays.

Adding Elements:
push: Adds elements to the end of the array.

javascript
Copy
Edit
let fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits); // Output: ["apple", "banana", "cherry"]
unshift: Adds elements to the beginning of the array.

javascript
Copy
Edit
let fruits = ["apple", "banana"];
fruits.unshift("mango");
console.log(fruits); // Output: ["mango", "apple", "banana"]
Removing Elements:
pop: Removes the last element from the array.

javascript
Copy
Edit
let fruits = ["apple", "banana", "cherry"];
fruits.pop();
console.log(fruits); // Output: ["apple", "banana"]
shift: Removes the first element from the array.

javascript
Copy
Edit
let fruits = ["apple", "banana", "cherry"];
fruits.shift();
console.log(fruits); // Output: ["banana", "cherry"]
Finding Elements:
indexOf: Returns the index of the first occurrence of a value.

javascript
Copy
Edit
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.indexOf("banana")); // Output: 1
includes: Checks if an array contains a specific value.

javascript
Copy
Edit
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.includes("banana")); // Output: true
Removing/Replacing Elements:
splice: Removes or replaces elements.
javascript
Copy
Edit
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1); // Removes 1 element at index 1
console.log(fruits); // Output: ["apple", "cherry"]
Slicing Arrays:
slice: Returns a portion of the array without modifying the original array.
javascript
Copy
Edit
let fruits = ["apple", "banana", "cherry"];
let newFruits = fruits.slice(1, 3);
console.log(newFruits); // Output: ["banana", "cherry"]

*/

