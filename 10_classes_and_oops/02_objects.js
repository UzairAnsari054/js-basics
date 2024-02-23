// Js has a prototyple behavior also called as prototyple inheritance, that means it will keep seaching for everything up the inheritance it can until it encounters null.
// Everything in Js is an Object, even functions also

function mul5(num){
    return num*5
}

mul5.power = 2

console.log(mul5(5));
console.log(mul5.power);
console.log(mul5.prototype);

function user(name, age){
    this.name = name
    this.age = age
}

const user1 = new user("Uzair", 25)
const user2 = new user("Sonu", 30)

// prototype ke through userFunction me hamne apna banaya hua increament function inject krdiya
user.prototype.increment = function(){
    this.age++
}

user.prototype.printMe = function(){
    console.log(`Age is ${this.age}`);
}

user1.increment()
user1.printMe()



/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/