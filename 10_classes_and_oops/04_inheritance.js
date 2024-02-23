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