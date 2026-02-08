// // The Nullish Coalescing Operator (??) in JavaScript is used to provide a default value when a variable is either null or undefined.

// let result = value1 ?? value2;
let name = null;
let defaultName = "Guest";

let finalName = name ?? defaultName;
console.log(finalName); // Output: "Guest"
