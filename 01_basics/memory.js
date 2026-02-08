// stack memory gives us the copy of a varibale's value
// heap memory gives us the original refrence of the value so that we can make direct changeas in it
// primitive data goes in the stack
// non primitive data type goes in the heap memory


// stack exmaple
let name1="sameer"
let name2=name1 // name1 ki vlaue goes in the name2 but its copy is goes in the name2

console.log(name1);
console.log(name2);

name2="aryan";  //name2 ki value change karne pr name1 pr koi fark nhi padta
console.log(name2);


// heap memory example

let info1 = {
    id:"javascript ki mkc",
    gmail:"kdbak@gnail.com",
}
let info2=info1 // info1 ka refrence ab info2 bhi use krega means data ek he jagah hai but access do log kr rhe hai isliye ek me bhi data change krne pr value change ho jaayegi

info2.id="chai or code";
console.log(info1);
console.log(info2);

