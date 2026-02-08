//parameter  is a variable listed inside the function definition. It’s like a placeholder.
//Arguments is  The actual value you pass to the function when calling it.


function name(username){
    if(!username){
        // if no value is being passed in this function
        console.log("pls enter a name");
        return
        
    }
    return (`${ username} is a good boy`)

}
console.log(name("hitesh"))
