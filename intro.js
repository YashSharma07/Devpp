// output
console.log("Hello World");

// top down and left to right

//Data types in JavaScript
// => Number, Boolean, String, undefined, Object

// ES6 => Ecma script 6
// let => block scoped variable
// const => block scoped variable // reassignment is not allowed // empty not allowed // after assign not allowed

// ===(data type bhi chequed hota hai) >>> stricter than >>> == (no data type checked just the value is chequed)

// Objects =? Key value paris

let data = {
    name: "Steve Rogers",
    place: "Queens"
}

// access object keys
// dot notatio => literal check


console.log(data.name);
console.log(data.place);

// bracket notation
 let key = "name";

 console.log(data[key]);

 // reassigning
 data.key = "I am a new Value";
 console.log(data);

 // key => unique
 // value => can be duplicate

 


// array 
 let values = [
     10,
     false,
     "hello I am a string",
     [1, 2, 3, 4, 5, 6],
     {
         name: "Yash Sharma"
     }
 ]

 console.log(values[4]);