// we can pass a array or object in the function as the arguments

function calculateprice(...num){
    // a array will be made if 2 or more arguments are passed in this function as we have used the rest(...)
    return num
}
console.log(calculateprice(53,634,63,345,34));

const user={
    name:"sameer",
    price:999
}

// above  object is being passed in the function in line 20
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and the price is ${anyobject.price}`);
    
}

handleobject(user)