const descriptor =Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descriptor);

const user = {
    name: "Uzair",
    age: 25,
    isAvailable: true,

    orderChai: function(){
        console.log("Chai nhi bani");
    }
}

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, "age", {
    // writable: false
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(user, "age"));

for (let [key, value] of Object.entries(user)) { // Object.entries make the object user iterable
    if(typeof value !== 'function' ){
        console.log(`${key} : ${value}`);
    }
}