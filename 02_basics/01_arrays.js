const myArr1 = [0,1,2,3,4,5]
const myArr2 = new Array(0,1,2,3,4,5)

console.log(myArr1[3]);
console.log(myArr2.length);

// Array methods

myArr1.push(6) // => [0, 1, 2, 3, 4, 5, 6]
myArr1.push(7) // => [0, 1, 2, 3, 4, 5, 6, 7]
myArr1.pop() // => [0, 1, 2, 3, 4, 5, 6]
myArr1.unshift(8) // => [8, 0, 1, 2, 3, 4, 5, 6] 
myArr1.shift() // => [0, 1, 2, 3, 4, 5, 6]
console.log(myArr1);

console.log(myArr1.includes(9)); // => false
console.log(myArr1.indexOf(9)); // => -1
console.log(myArr1.indexOf(2)); // => 2

const myArr3 = myArr1.join() // convert array into string with ','
console.log(myArr1); // => [0, 1, 2, 3, 4, 5, 6]
console.log(myArr3); // => 0,1,2,3,4,5,6
console.log(typeof myArr3); // string

// =-=-=-=-=-=-=-=-=-=-=-Slice, Splice=-=-=-=-=-=-=-=-=-=-=-
console.log("A ", myArr1); // => A  [0, 1, 2, 3 , 4, 5, 6]

const myArr4 = myArr1.slice(1,3) // With Slice Deep copy are created as it does not changes origianl array
console.log(myArr4); // => [1, 2]
console.log("B ", myArr1); // => B  [0, 1, 2, 3 , 4, 5, 6]

const myArr5 = myArr1.splice(1,3) // With Splice Shallow copy created as it changes origianl array
console.log(myArr5); // => [ 1, 2, 3 ]
console.log("C", myArr1); // => B  [0, 4, 5, 6]

// Apart from diffrence in ranges between Slice & Splice i.e, 
// SLice(1,3) gives elements from index 1 to index 3-1(i.e, without including 3rd index)
// eg, for [0,1,2,3,4,5] => [1,2]
// Slice also does not chamges the origian array i.e, [0,1,2,3,4,5]

// SPice(1,3) gives elements from index 1 to index 3(i.e, including 3rd index)
// eg, for [0,1,2,3,4,5] => [1,2,3]
// Spice chamges the origian array by removing the Spliced elements i.e, [0,4,5]
