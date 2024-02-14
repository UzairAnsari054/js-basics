// '' & "" both represents strings

let name = "Uzair-An"
let age = 25

console.log(`My name is ${name} & my age is ${age}`);
console.log(name[0]);
console.log(name.__proto__);
console.log(name.length);
console.log(name.toUpperCase());
console.log(name.charAt('3'));
console.log(name.indexOf('r'));
console.log(name.substring(0,3))
console.log(name.slice(-2,1));
console.log();

// In a browser open Inspect -> Console & enter, let name = new String('Uzair') then again enter name to get all string functions. To understand the functions take help from MDN