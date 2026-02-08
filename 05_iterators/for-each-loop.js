const coding=["js","ruby","java","python","cpp"]


// foreach grabs the value from the array and put it in a funtion and we can persorm whatever we want 
coding.forEach(function (val){
     console.log(val);
     
})


const flipkart=[
{
    product:"camera",
    price:1383297
},
{
    product:"guitar",
    price:138383
},
{
    product:"phone",
    price:999
},
{
    product:"laptop",
    price:54000
},
{
    product:"toy",
    price:78783
}

]

// below code brings the value from the flipkart and store it as the item in a function
flipkart.forEach( (item) => {
    console.log(`price of the ${item.product} is ${item.price}`);

    
})