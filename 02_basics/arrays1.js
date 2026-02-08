// Arrays are ordered collections.
// Use [] to create and access elements.
// Methods like push, pop, slice, splice, etc. make them very flexible.
//  in js if i make a copy of the array in another variable then it shares the same refrence location means agar ek bhi me kuch changes hua toh dono array affect honge

const myarray=[1,2,3,true,"sameer"]

console.log(myarray);
console.log(myarray[3]);   //index starts at 0

// below is the another method to declare a array 
const myarray2=new Array(5,6,7,8,9,)
console.log(myarray2);


// methods of the array 
myarray.push(4)   // push adds the new element  in last of the array
console.log(myarray);
myarray.pop()  //  pop removes the last element from the array
console.log(myarray);
myarray.unshift(78)   // unshist adds one or more elemnts in the start of the array
console.log(myarray);
myarray.shift()   // shift removes a element from the start of the array
console.log(myarray);

console.log(myarray.includes(8));  //checks if 8 is present in the array
console.log(myarray.indexOf(3));  //finds the index of an element , if element is not presernt then return the -1

const newarray=[...myarray,...myarray2]  // spread(...) operator jopind the 2 arrays in js 
console.log(newarray);


const arr=[10,20,30,40,50,60,70,80]
console.log(arr.slice(2,5));  //slice Extract a portion of an array without changing the original array. here index 2 is included but not the 5
console.log(arr.splice(2,5));  // splice method remove and return every element which is not in the range of index it is defined and it directly make changes in the parent array

console.log(arr);
