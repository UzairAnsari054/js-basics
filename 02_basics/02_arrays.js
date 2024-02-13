const marvelHeros = ["Thor", "Ironman", "SpiderMan"]
const dcHeros = ["Superman", "Flash", "Batman"]

marvelHeros.push(dcHeros) // Arrays can take any data types, even Array itself, like [A, B, C, [D, E, F]]
console.log(marvelHeros); // => [ 'Thor', 'Ironman', 'SpiderMan', [ 'Superman', 'Flash', 'Batman' ] ] 
console.log(marvelHeros[3]); // => [ 'Superman', 'Flash', 'Batman' ]
console.log(marvelHeros[3][1]); // => Flash'

const allHeros = marvelHeros.concat(dcHeros)
console.log(allHeros) 

const newHeros = [...marvelHeros, ...dcHeros] // This is Spread operation that works samae as concat()
console.log(newHeros) 

const myArr6 = [1,2,3,[23,24],4,5,[56,57,[21,23],6,7]]
const myArr7 = myArr6.flat(Infinity) // Flat operator takes depth as in how many nods you have to open & the it spread out the elements
console.log(myArr7); // => [1,  2,  3, 23, 24, 4,5, 56, 57, 21, 23, 6,7]

console.log(Array.isArray("Uzair")); // => false
console.log(Array.from("Uzair")); // => [ 'U', 'z', 'a', 'i', 'r' ]
console.log(Array.from({name: "Uzair"})); // => []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // => [ 100, 200, 300 ]
console.log(Array.isArray(score1, score2, score3)); // => false
console.log(Array.from(score1, score2, score3)); // => error