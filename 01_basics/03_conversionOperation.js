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

 let rollNumber = 12
 let StringNumber = String(rollNumber)
 console.log(typeof(StringNumber));
