console.log(Math);
console.log(Math.abs(-77));         //converts negative value in postive but  not vice vers
console.log(Math.round(7.56));     //rounds off the number
console.log(Math.ceil(8.7));       // 9 print hoga as it is the ceiling value for 8.7
console.log(Math.floor(8.7));      // 8 print hoga 
console.log(Math.min(1,2,3,4,5));   //for minimum
console.log(Math.min(1,2,3,4,5));   //for max



// Math.random() → gives 0 ≤ r < 1
console.log(Math.random());  
console.log(Math.random()*10);  //this generates between 0 and 9
console.log(Math.floor(Math.random()*10));   //generates random integer

const min=10
const max=18
console.log(Math.floor(Math.random()*(max-min+1)+min));  // always generates a number between 10 to 18  ,both 10 and 18 included , if dont want 18 to be included then remove the +1 from max-min+1
