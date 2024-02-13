// Singleton:  When you create object with constructor, then the object is Singleton, i.e, only Single Instance is created
// Literal: When you create object with literals , then the object is not Singleton, i.e, only Multiple Instances are created

// In Js there are 2 ways to create an object, Singleton and Literal
// & the only difference is that with Singleton single instance of an object is created, while with Literal multiple instances of objects are created

// Singleton:
//const user = new Object()     => {} This is Singleton object

// Literal:
// const user = {}              => {} This is Non-Singleton object

const mySym = Symbol("Key1")

const user1 = {
    name: "Uzair",
    "full name": "Uzair Ansari",
    age: 25,
    location: "Mumbai",
    email: "uzair@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
    [mySym]: "user1Key1", // => [mySym] refered as Symbol(Key1) while, mySym refered as Key1(Just like any other key in the object)
}

console.log(user1.name); // => Uzair
console.log(user1["name"]); // => Uzair
console.log(user1["full name"]); // => Uzair Ansari
console.log(user1[mySym]);  // => user1Key1
console.log(typeof user1[mySym]);  // => string

user1.email = "yoyo@yahoo.com"
console.log(user1.email); // => yoyo@yahoo.com

// Object.freeze(user1)
user1.email = "meme@momo.com" 
console.log(user1); // => => yoyo@yahoo.com
/* {
    name: 'Uzair',
    'full name': 'Uzair Ansari',
    age: 25,
    location: 'Mumbai',
    email: 'yoyo@yahoo.com',
    isLoggedIn: false,
    lastLoginDays: [ 'Monday', 'Saturday' ],
    [Symbol(Key1)]: 'user1Key1'
  }
  */

  user1.greeting1 = function(){
    console.log("Inside a function")
  }
  console.log(user1.greeting1); // => [Function (anonymous)]
  console.log(user1.greeting1()); // => Inside a function

  user1.greeting2 = function(){
    console.log(`Inside a function, ${this.name}`)
  }
  console.log(user1.greeting2()); // => Inside a function, Uzair
