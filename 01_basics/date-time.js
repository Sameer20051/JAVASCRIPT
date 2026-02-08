// dates

let mydate=new Date()
console.log(mydate);
console.log(typeof mydate);

console.log(mydate.toString());   //transform in date with time
console.log(mydate.toDateString());  // transform in date but no time
console.log(mydate.toLocaleString());  //trnasform in date and time with am and pm , it is more readble

let mycreateddate=new Date(2025,0,18)  // in js the month start from the 0 as january and so on
console.log(mycreateddate);

let=mydate_time =new Date(2025,0,18,2,45,32)  //date and time both 
console.log(mydate_time.toLocaleString());


let mytimestamp=Date.now()     //time in ms from 1 jan 1970
console.log(Math.floor((mytimestamp)/1000));   // prints the above time in seconds

let newdate=new Date()
console.log(newdate);
console.log(newdate.getMonth());  //return integrs for the months like 0 for jan , 1 for feb and  so on till 11 for december
console.log(newdate.getDay());  //getday return the integer [0,6] for the day like 0 for sunday and 1 for monday and son on till 6 for saturday
console.log(newdate);
console.log(newdate);



  


