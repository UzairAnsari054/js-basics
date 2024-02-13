const tinderUser1 = new Object() // => {}
const tinderUser2 = {} // => {}
console.log(tinderUser1);
console.log(tinderUser2);

tinderUser1.id = "123abc"
tinderUser1.name = "Uzair"
tinderUser1.isLoggeIn = false
console.log(tinderUser1); // => { id: '123abc', name: 'Uzair', isLoggeIn: false }

const tinderUser3 = {
    eamil: "uzair@google.com",
    fullName: {
        userFullName: {
            firstName: "Uzair",
            lastName: "Ansari"
        }
    }
}

console.log(tinderUser3.fullName); // => { userFullName: { firstName: 'Uzair', lastName: 'Ansari' } }
console.log(tinderUser3.fullName.userFullName); // => { firstName: 'Uzair', lastName: 'Ansari' }
console.log(tinderUser3.fullName.userFullName.firstName); // => Uzair


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

const obj3 = {obj1, obj2}
console.log(obj3); // => { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign(obj1, obj2)
console.log(obj4); // Same => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1); // Same => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = Object.assign({}, obj1, obj2)
console.log(obj5); // Same => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj1); // Same => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }


obj7 = {...obj1, ...obj2} // Spread operator
console.log(obj7); // Same => { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

console.log(tinderUser1); // => { id: '123abc', name: 'Uzair', isLoggeIn: false }
console.log(Object.keys(tinderUser1)); // => [ 'id', 'name', 'isLoggeIn' ] It takes all the keys from an object and put them in an array
console.log(Object.values(tinderUser1)); // => [ '123abc', 'Uzair', false ] It takes all the values from an object and put them in an array
console.log(Object.entries(tinderUser1)); // => [ [ 'id', '123abc' ], [ 'name', 'Uzair' ], [ 'isLoggeIn', false ] ]] It takes all the key-value pairs from an object & put them in an array and then it combines all key-value arrays and put those array in a single array

console.log(tinderUser1.hasOwnProperty('isLoggeIn')); // => true
console.log(tinderUser1.hasOwnProperty('isSignIn')); // => false



const course = {
    courseName: "js in hindi",
    price: 99,
    courseInstructor: "Hitest"
}

const {courseInstructor} = course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);