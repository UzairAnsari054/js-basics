// Primitive data types (Call by value)
// Primitive data types are stored directly in memory, for eg myString = "Uzair", so myString will be stored in the memory
// In primitive data types, changing a variable's value creates a new copy with the updated value.
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Non Primitive data type (Call by reference)
// Non-primitive data types are stored as references to their values in memory. for eg, myArray = [a, b, c], so myArray will be stored in the memory but as a reference to [a, b, c]
// In Non-primitive data types, changing a variable's value updates the orignal value.
// 7 types : Array, Objects, Functions

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id===anotherId);

const myArray = ["Superman", "Batman", "IronMan"]

let myObj = {
    name: "Uzair",
    age: 25
}

const myFunction = function(){
    console.log("Hello World");
}

let myString = "Uzair"
let myNumber = 11
let myBoolean = true
let myNull = null
let myUndefined
let myBigInt = 123456789
let mySymbol = Symbol('122')

console.log(typeof myString); // => string
console.log(typeof myNumber); // => number
console.log(typeof myBoolean); // => boolean
console.log(typeof myNull); // => object
console.log(typeof myUndefined); // => undefined
console.log(typeof myBigInt); // => bugInt
console.log(typeof mySymbol); // => symbol
console.log(typeof myArray); // => object
console.log(typeof myObj); // => object
console.log(typeof myFunction); // => object function


// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=

//        (2 types of Memory in js)

// 1. Stack (Primitive data types)
//     - In Stack memory, you get the copy of variable's value & changing a variable's value creates a new copy with the updated value.
let myName = "Uzair"
let otherName = myName
otherName = "Sonu"


// 2. Heap (Non-primitive data types)
//     - In Heap memory, you get the reference of original value & changing a variable's value updates the orignal value.
let user1 = {
    email: "user1@google.com",
    upi: "user1"
}
let user2 = user1
user2.email = "user2@google.com"

console.log(user1); // => { email: 'user2@google.com', upi: 'user1' }
console.log(user2); // => { email: 'user2@google.com', upi: 'user1' }