let myName = "Uzair    "
console.log(myName.length)


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spiderman power is ${this.spiderman}`);          // SAME
        // console.log(`Spiderman power is ${heroPower.spiderman}`);  // SAME
    }
}
console.log(heroPower.getSpiderPower());

// created a personal functionality inside of the function(i.e an object)
// because we have created boom property in inside of the Object i.e, top-level in the hirarchy, so all child level element(functions, arrays, string) can also access the boom property
Object.prototype.boom = function(){
    console.log(`Boom is a common power among all heros`);
}

heroPower.boom()
myHeros.boom()
myName.boom()

// created a personal functionality inside of the array(i.e an object)
// because we have created addBatman property in inside of the Array i.e, not top-level in the hirarchy, so the parent level elements(Object/function) & sibling level element(string, etc) can not access the addBatman property. Only the child elements of Array could acces the property made inside of Array
Array.prototype.addBatman = function(){
    console.log(`Added Batman`);
}

myHeros.addBatman() // => Works as it should because properties made by prototypes can only be accesed by the elements whithin which it's made and by the child elements down the chain

myHeros.addBatman() // => Does not works as it should because it'd Array's parent element
myName.addBatman() // => Does not works as it should because it'd Array's sibling element


