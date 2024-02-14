// this keyword is used to get the current context
// Browser's console core scope/global object is Windows Object
// Code Environment's global object/scope is Empty Object i.e,{}
// this context works for object, i.e, name = "Uzair" -> this.name => Uzairz
// this context doesn't works for variables/function, i.e, let name = "Uzair" -> this.name => undefined

const user = {
    name: "Uzair",
    price: 999,
    welcomeMsg: function() {
        console.log(`${this.name}, welcome to website`);  
        console.log(this)
    }
}

user.welcomeMsg()
user.name = "yoyo"
user.welcomeMsg()

console.log(this) // => {}


function chai1(){} // normal function

const chai2 = function(){} // expression

const chai3 = () => {} // arrow function
const chai4 = () =>    // arrow function


function chai4() {       // normal function
    let name = "Uzair"
    console.log(this.name);   // => undefined
    console.log(this);        // => Global Object
}
chai4()

const chai5 = function() {       // expression
    let name = "Uzair"
    console.log(this.name);    // => undefined
    console.log(this);         // => Global Object
}
chai5()

const chai6 = () => {       // arrow function
    let name = "Uzair"
    console.log(this.name);    // => undefined
    console.log(this);         // => {}
}
chai6()

const addTow = (num1, num2) => { // arrow function
    return num1 + num2
}
console.log(addTow(2,5));

const subtractTow = (num1, num2) => num1 - num2 // arrow function with implicit return
console.log(subtractTow(2,5));

const subtractToww = (num1, num2) => ({name: "Uzair"})
console.log(subtractToww(2,5)); // => { name: 'Uzair' }