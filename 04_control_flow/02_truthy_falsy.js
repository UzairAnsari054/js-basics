// A non-boolean value that is assumed to be true is called "truthy" value
// A non-boolean value that is assumed to be false is called "fasly" value

// Following are the falsy values that are always assumed to be false"
// false, 0, -0, 0n of BigInt, "", null, undefined, NaN (Not a Number)

// Apart from above falsy values, every value is a truty value, such as:
// "0", " ", 'false', [], {}, function(){}

// =-=-=-=-=-=-= A way to check empty array =-=-=-=-=-=-=
const myArr = []
if(myArr.length === 0){            // Here, it compares the length of myArr (which is a number) to the number 0
    console.log("myArr is empty");
}

// =-=-=-=-=-=-= A way to check empty object =-=-=-=-=-=-=
const user = {
    name: "Uzair",
    age:25
}
console.log(Object.keys(user)); // =>[ 'name', 'age' ]
// Object.keys(user) converts the KEYS of a given OBJECT into an ARRAY

const myObj = {}
if(Object.keys(myObj).length === 0) { // // Here, it compares the length of the array which is basically the array of keys of myObj (which is a number) to the number 0
    console.log("myObj is empty");
}


// false == 0 -> true
// false == "" -> true
// 0 == "" -> true