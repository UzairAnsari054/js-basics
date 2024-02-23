//         

const user = {
    name: "uzair",
    age: 25
}

function userDetails(name, age){
    this.name = name
    this.age = age

    this.greetings = function(){
        console.log(`Welcome ${this.name}`)
    }

    return this
}

const user1 = new userDetails("R", 3)
const user2 = new userDetails("R3", 33)

console.log(user1.constructor);
console.log(user2);