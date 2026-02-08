// objects can be made by construcctor or the literals 
//litereals produce the non singleton object
// condtructor produce the singleton object

const mysym=Symbol("sym")

const jsuser={
    name:"sameer",
    age:20,
    location:"india",
    email:"sameer@gmail.com",
    isloggedin:false,
    lastloggindays:["monday","friday"],
    [mysym]:"hello",
    greeting:function(){
   return console.log(`i am ${this.name}`)   //if calling the key which is in the same object u are calling it then use the "this"
}
}

console.log(jsuser.name);    
console.log(jsuser["name"]);   // above and this line prints teh same thing  but this code is better to use, inn this use the "" as key is stored as the string in the object in the js
console.log(jsuser[mysym]);   // when printing the value whose key is a symbol then dont use "" while writting the key name in the [] 


jsuser.age=25   // this line changes the value of the age 
Object.freeze(jsuser)  // now the jsuser is freeezed hence now i cant make changes in the jsuser , if i does the code run but changes is made in tha jsuser
console.log(jsuser["age"]);

jsuser.age=50   //no changes will be made in the age as i have freezed the jsuser in the line 18 and age is in the jsuser
console.log(jsuser["age"]);

console.log(jsuser.greeting())

 
