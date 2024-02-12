const score1 = 400
const score2 = new Number(100)

console.log(score1);
console.log(score2);
console.log(score2.toString().length);
console.log(score2.toFixed(3));

const num1 = 23.8966 // => 23.9
const num2 = 123.8966 // => 124
const num3 = 1123.8966 // => 1.12e+3
console.log(num1.toPrecision(3)); // Gives precisied value, but you give it the number to be precisied for
console.log(num2.toPrecision(3));
console.log(num3.toPrecision(3));

const cost1 = 1000000
const cost2 = 1000000
console.log(cost1.toLocaleString());
console.log(cost2.toLocaleString('en-IN'));

// =-=-=-=-=-=-=-=-=-=-=-=- MATHS =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

console.log(Math.abs(-4)); // only converts -ve to +ve
console.log(Math.round(5.6));
console.log(Math.min(1,2,3,4,5,6));
console.log(Math.max(1,2,3,4,5,6));
console.log((Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min )