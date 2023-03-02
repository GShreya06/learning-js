

// var a=8;
// var  a=hello;
// console.log(a)

// Primitive data types 
// nn bb ss u

let a = null;
let b = 345;
let c = true;
let d = BigInt("353") + BigInt("56");
let e = "Hello";
let f = Symbol("I am a Symbol");
let g
console.log(a, b, c, d, e, f, g)
console.log(typeof g)

// Non primitive (objects)
const item = {
    a: 23,
    b: 56,
    c: 45,
    "Hello": undefined
}

console.log(item[a]);
// loops
for (let i = 2; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);

    }
}

// ternary operator
let q=prompt("Whats your age?");
console.log("you can",(q<18? "not drive":"Drive"));
let num =Math.random();
for (let j=0;j<=100;j++){
    if(num==j){
        console.log(num);
    }
    else{
        j++;
    }
}

let value=true;
alert(typeof value);

value=String(value);
alert(typeof value);