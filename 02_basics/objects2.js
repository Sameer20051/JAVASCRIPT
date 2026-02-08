// const tinderuser=new Object()

const tinderuser={}
tinderuser.id="123abs"
tinderuser.name="sameer"
tinderuser.isloggedin=false

console.log(Object.keys(tinderuser));   //makes an array of the all the keys of the tinderuser object
console.log(Object.values(tinderuser));   //makes an array of the all the values of the tinderuser object

// object ke andar object
const obj1={
    name:"samu",
    class:"btech",
    crush:{
        crush1:"shreya",
        crush2:"onlyshreya"
    }

}

console.log(obj1.crush.crush1);

const obj2={
    address:"azamgarh",
    religion:"hindu"
}

// merging of 2 objects in js
const obj3={...obj1,...obj2}
console.log(obj3);
