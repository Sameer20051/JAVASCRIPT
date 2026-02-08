const marvel=["thor","loki","hulk"]
const dc=["flash","superman","batman"]

// marvel.push(dc)   // dc will be includeed in the marvel as thw whole array
// console.log(marvel);
// console.log(marvel[3][1]);   // first it goes in the index 3 of the maevel aaray then in the 1 index of the 3 index array -->> superman


const newhero=marvel.concat(dc)   //concat adds the elements of an array in another array       
console.log(newhero);


const real =Array.from("sameer");  //coverets the "sameer" into an array and store it in the real,we can use Array.from() only on the iterables like set,strings,maps but not on the non-iterables other wise it cant convert it into the arra like in the line 22
console.log(real);


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));   // makesd the array of the score 1 ,2,3   -->:>[100,200,300]

console.log(Array.from(score1));


// Array.isArray() is a static method that checks whether a given value is an array or not.
console.log(Array.isArray([1, 2, 3]));   // true
console.log(Array.isArray("hello"));     // false
console.log(Array.isArray({a: 1}));      // false
console.log(Array.isArray(new Array())); // true


