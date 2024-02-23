// class User {
//     constructor(name, age){
//     this.name = name
//     this.age = age
//     }

//     encryptName(){
//         return `${this.name}ZZZ`
//     }

//     makeUpperCase(){
//         return `${this.name.toUpperCase()}`
//     }
// }

// const user1 = new User("Uzair", 25)
// console.log(user1.encryptName())
// console.log(user1.makeUpperCase())


// =-=-=-=-=-=-=-=-=- Behind the scenes =-=-=-=-=-=-=-=-=-

function User(name, age){
    this.name = name
    this.age = age
}

User.prototype.encryptName = function(){
    return `${this.name}BBB`
}

User.prototype.makeUpperCase = function(){
    return `${this.name.toUpperCase()}`
}

const user1 = new User("Uzair", 25) 
console.log(user1.encryptName());
console.log(user1.makeUpperCase());