// in filter we need to give condition so that if any value satisfies that condition that will be returned by the filter method
// filter returns the value but foreach dont

const nums=[1,2,3,4,5,6,7,8,9,10]

// const newnums= nums.filter( (num) => num>4)
// line 5 and 7 runs the same code but in line we have to write return as we have used {} but in line 5 we dont need to write return as we dont used the {}, consept is that if {} is present then we need to write the return keyword to return a value in a function
const newnums= nums.filter( (num) =>{
     return num>4
})
console.log(newnums);
