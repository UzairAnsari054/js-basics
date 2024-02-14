// Nullish Coalescing Operator (??): null, undefined

let value
value = 5 ?? 10      // => 5
value = null ?? 10      // => 10
value = undefined ?? 10      // => 10
value = null ?? 100 ?? 200      // => 100

console.log(value);


// Ternary Operator:
// condition ? true : false

const price = 100
price > 50 ? console.log("Price greater than 100") : console.log("Price smaller than 100");