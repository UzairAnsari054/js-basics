 let score = null

 console.log(typeof score);
 console.log(typeof(score));

 let valueInNumber = Number(score)
 console.log(typeof(valueInNumber));
 console.log(valueInNumber);
 // if you try to convert a non pure number string like "123abc" into a mumber, it will be converted bu the value in it will be NAN
 /* eg. Converting in Number:
 "33" => 33
 "123abc" => NaN
 "true" => 1
 "false" => 0
 "null" => 0
 "undefined" => NaN
 "Uzair" => NaN
 */

 let isLoggedIn = ""
 let booleanIsLoggedIn = Boolean(isLoggedIn)
 console.log(booleanIsLoggedIn);
 /* eg. Converting in Boolean:
 "1" => true
 "0" => false
 "" => false
 "Uzair" => true
 */

 let rollNumber = 33
 let StringNumber = String(rollNumber)
 console.log(StringNumber);
/* eg. Converting in String:
 33 => 33 as type string
 true => true as type string
 */

 // OPERATION

 let value = 3
 let negValue = -value
 console.log(negValue);

console.log(2%2); // Remainder
console.log(2/2); // Quotient

let str1 = "Hello"
let str2 = " Uzair"

let str3 = str1 + str2
console.log(str3);

console.log(1 + "2"); // => 12 
console.log("1" + "2"); // => 12
console.log("1" + 2 + 2); // => 122
console.log(1 + 2 + "2"); // => 32

console.log(+true) // => 1
console.log(+"") // => 0