function setName(name){
    // complex DB calls
    this.name = name
}

function createUser(name, age){
    setName.call(this, name)                    // Ab kyun ke this ka context bahar se aata toh this.age function se bahar ke age ka context h,
                                     //
    this.age = age 
                     
}
 
const user1 = new createUser("Uzair", 25)
console.log(user1);