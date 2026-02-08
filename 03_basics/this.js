// functioin callled with an object
const user={
    name:"sameer",
    price:999,
    welcome: function(){
        console.log(`${this.name} is a good boy`);   //The 'this' keyword refers to the object that is currently executing the function.
        
    }
}

user.welcome()


// functiion wihout an object
function show() {
  console.log(this);
}

show(); // 👉 In strict mode: undefined | Otherwise: window (in browsers)
