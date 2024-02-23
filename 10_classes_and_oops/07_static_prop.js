class User {
    constructor(name){
        this.name = name
    }

    logMe(){
        console.log(`Username is ${this.name}`);
    }

    // Jese hi 1 user bane toh uske saath 1 unique Id attach ho jaye
    // Static access hone se rok deta h
    static createId(){
        return `123`
    }
}

const user1 = new User("Uzair")
// console.log(user1.createId())


class Teacher extends User {
    constructor(name, age){
        super(name)
        this.age = age
    }
}

const user2 = new Teacher("Uzair", 25)
user2.logMe()
// console.log(user2.createId())