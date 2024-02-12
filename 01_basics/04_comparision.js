console.log(null > 0); // => false
console.log(null == 0) // => false
console.log(null >= 0) // => true
// equality check(==) & comparisioin (< > >=) operator work differently in js
// Comparison operator converts null to number.


console.log("2" == 2);
console.log("2" === 2);
// == check for same data, "2" == 2 => true
// === check for same data and same data type, "2" == 2 => false