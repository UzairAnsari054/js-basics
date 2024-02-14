
const numbers = [1,2,3,4,5]
for (const num of numbers) {
    console.log(num);
}

const greetings = "Hello World"
for (const greets of greetings) {
    console.log(`ach char is: ${greets}`);
}

const greetings2 = "Hello World"
for (const greets of greetings2) {
    if(greets == " ") {
        continue
    }
    console.log(`ach char is: ${greets}`);
}

// =-=-=-=-=-=-=-= Maps =-=-=-=-=-=-=-= 
// Map is an object and is the collection of unique key-value pairs that also remembers the original insertion order
// We cannot iterate on Maps with 'for in'
// but we can iterate on Maps with 'for of'
// Map is also a callback funtion that has 3 parameter i.e, value, index, & array
// Map is a callback function & so doesn't require a name of the function
// Callback: Muje aik function dedo ke muje karna kya h. For eg, () <-This is a callback & it is used to access individual items of array & for that we need to give it a name such as (item) <-This is callback name
// Map has a callback function where in we can accees individual values of an array
// Map can return values like filter, unlike foraEach

const map = new Map()                    
map.set("IN", "India")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("IN", "India")
console.log(map)

for (const key of map) {
 console.log(key);   
}

for (const [key, value] of map) {
 console.log(`${key} - ${value}`);   
}  

// =-=-=-=-=-=-=-= Iterating on Objects =-=-=-=-=-=-=-= 

// We cannot iterate on Objects with 'for of'
// but we can iterate on Objects with 'for in'

const myObject = {
    "game1": "NFS",              // both are right
    game2: "Spiderman"           // both are right
}

for (const key in myObject) {
    console.log(key);
    console.log(`${key} - ${myObject[key]}`);
}

// =-=-=-=-=-=-=-= 'for of' VS 'for in' =-=-=-=-=-=-=-= 

const myArr1 = ["A", "B", "C", "D"]   // with 'for of' you directly get the value of it's index
for (const key of myArr1) {
    console.log(key);                 // => A B C D
}

const myArr = ["A", "B", "C", "D"]    // with 'for in' you directly get the index of it's value
for (const key in myArr) {
    console.log(key);                 // => 0 1 2 3
    console.log(myArr[key]);          // => A B C D
}

// TO iterate on Maps -> Use 'for of'
// TO iterate on Objects -> Use 'for in'
// TO iterate on Arrays -> 
// 1. 'for of' directly get the value of it's index
// 2. 'for in' directly get the index of it's value

// =-=-=-=-=-=-=-= 'forEach' =-=-=-=-=-=-=-= 

// forEach is a callback funtion that has 3 parameter i.e, value, index, & array
// forEach is a callback function & so doesn't require a name of the function
// Callback: Muje aik function dedo ke muje karna kya h. For eg, () <-This is a callback & it is used to access individual items of array & for that we need to give it a name such as (item) <-This is callback name
// forEach has a callback function where in we can accees individual values of an array
// forEach can't returns anythings, for that case we use filter() which is also a callback function
// but still we can get the same result as filter, by applying a condition based on which we'll get a result & that result we can push into a empty array. (Check monthsArr1 & monthsArr2 example below)


const myArr2 = ["Kotlin", "Javascrip", "Swift", "Dart"]
myArr2.forEach( function (item) {       // forEach with callback function without name
    console.log(item);
})

myArr2.forEach( (item) => {             // forEach with arrow function
    console.log(item);
})

myArr2.forEach( (item, index, arr) => {        // forEach is a callback funtion that has 3 parameter i.e, value, index, & array
    console.log(item, index, arr);
})

function printMe(item) {
    console.log(item);
}
myArr2.forEach(printMe)                  // forEach with the reference of a function


const monthsArr1 = []
const monthsArr2 = [1,2,3,4,5,6,7,8,9,10,11,12]
monthsArr2.forEach( (month) => {
    if(month > 4){
        monthsArr1.push(month)
    }
})
console.log(monthsArr1);

// =-=-=-=-=-=-=-= 'Most commmon Operation' =-=-=-=-=-=-=-= 

const user = [
    {
        name: "Uzair",
        age: 25
    },
    {
        name: "John",
        age: 29
    },
    {
        name: "Jasmin",
        age: 28
    },
]

user.forEach( (item) => {
    console.log(item.name);
})