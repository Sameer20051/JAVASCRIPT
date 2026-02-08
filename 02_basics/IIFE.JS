// IIFE stands for Immediately Invoked Function Expression
// it’s a function that executes immediately after it’s defined.

(function () {
  console.log("I am an IIFE!");
})();  // in this line we used () to direcly invoke the function and must use ; as the js dont know when to stop the function call otherwise if theres is another function below it then it will show error

// below is the also example of iife but in arrow function 
(() => {
  console.log("Arrow Function IIFE running!");
})();

// below is the example of the iife in  arrow function wit parameter
((name) =>{
  console.log(`Hello, ${name}!`);
})("Sameer");


