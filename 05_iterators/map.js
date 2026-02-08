// map hold unique key and value like object but they remember the order they are stored and repetition is not allowed and map is not iterable

const country=new Map()

country.set('in',"india")
country.set('usa',"united states of america")
country.set('fr',"france")
country.set('in',"india")    // this line cant be executed as this is already done in line 5 and repetiotion dont happed in map

console.log(country);

for (const [key,value] of country) {
    console.log(key, ':-' ,value);
    
    
}


// forin loop cant be applied on the map as they are not iterable
// for (const key in country) {
//     console.log(key);
    
    
    
// }