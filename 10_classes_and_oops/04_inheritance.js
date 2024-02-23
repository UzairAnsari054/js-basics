const User = {
    name: "Uzair",
    age: 25
}
const Teacher = {
    makeVideos: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'Js Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


//modern.  (Teacher aap saari pro[erty lelo User ki])
Object.setPrototypeOf(Teacher, User )



// Yaha me chahte hu ke mere saare strings me mujhe trueLength ki property mill jaye
let myName = "Uzair    "
console.log(myName.length)

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

myName.trueLength()
'Sonu'.trueLength()



class Users {
    constructor(name){
        this.name = name
    }

    logMe(){
        console.log(`Username is ${this.name}`);
    }
}

class Teacherr extends Users{
    constructor(name, age){
        super(name)
        this.age = age
    }

    addCourse(){
        console.log(`A new course was added by ${this.name}`);
    }
}

const user1 = new Users("Uzair") 
user1.logMe()

const user2 = new Teacherr("Sonu", 30)
user2.addCourse()
user2.logMe()

console.log(user1 instanceof Users);
console.log(user2 instanceof Teacherr);
console.log(user2 instanceof Users);