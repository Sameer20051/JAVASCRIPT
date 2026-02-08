// forin loop is mostly used on the objects because they are not itereable using the forof

const shortcut={
    jss:"javascript",
    cpp:"c++",
    rb:"ruby",
    py:"pyhton"
}

for (const key in shortcut ) {
   console.log(`${key} is the shortcut for ${shortcut[key]}`);
   
    
    }


const number=[1,2,3,4,5,6]
for (const key in number) {
    // this loop prints the key of the array and yes array have the key which starts form the 0 and are hidden
    console.log(key);
    
}