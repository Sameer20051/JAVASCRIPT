const nums=[1,2,3]

// in reduce there is one value fetched from the array and another is provided by us wih an y value we want
// currentvalue is the value fetched by the reduce and accumultor is provided by us whose intial value is being provided after a comma   


const sum=nums.reduce( (acc,curr) => acc+curr, 0)
// in above line 0 is the initial value of the accumulator and curr is currentvalue
console.log(sum);
