// below is the code to add the price summary of any shopping app using the reduce method

const shopping=[
    {name:"mobile",
    price:999
    },
    {name:"tv",
    price:463
    },
    {name:"sd card",
    price:6362
    },
    {name:"latptop",
    price:636
    },
]

const  summary=shopping.reduce( (acc,item) => acc+item.price , 0)
// suppose i have a voucher of  1000 so i will inialize the acc with -1000 and use the below code for the price summary
// const  summary=shopping.reduce( (acc,item) => acc+item.price , -1000)

console.log(`total bill=${summary}`);
