let a = 10
const b = 20
var c = 30

console.log(a);
console.log(b);
console.log(c);

// Global scope can be accessed throughout the file
// A bolck scope can be accessed onnly with that block
// Browser's console core scope is different than code environment's Global scope 
// Browser's console core scope/global object is Windows Object
// Code Environment's global object/scope is Empty Object i.e,{}


function one(){
    const userName = "Uzair"

    function two(){
        const website = "Youtube"
        console.log(userName);
    }
    two()
    // console.log(website);

}
one()

console.log(addOne(2)); // This WORKS
function addOne(num){ // => This is a function
    return num + 1
}
console.log(addOne(2));

console.log(addTwo(2)); // This DOES NOT WORKS because addTow cannot be accessed before initialization
const addTwo = function(num){ // => This is an exression
    return num + 2
}
console.log(addTwo(2));

