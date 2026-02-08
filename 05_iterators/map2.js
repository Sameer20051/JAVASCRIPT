const nums=[1,2,3,4,5,6,7,8,9,10]
// below is the code nested map 
const newnums=nums
                   .map( (n) => n*10)
                   .map( (n) => n+1)

console.log(newnums);
