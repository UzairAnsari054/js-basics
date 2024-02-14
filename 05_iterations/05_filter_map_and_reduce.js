const myCoding = ["Kotlin", "Javascrip", "Swift", "Dart"]

const values = myCoding.forEach( (item) => {
    console.log(item);
    return item
})
console.log(values);


// =-=-=-=-=-=-=-= 'filter' =-=-=-=-=-=-=-= 

// filter is a callback funtion that has 3 parameter i.e, value, index, & array
// filter is a callback function & so doesn't require a name of the function
// Callback: Muje aik function dedo ke muje karna kya h
// Callback: Muje aik function dedo ke muje karna kya h. For eg, () <-This is a callback & it is used to acced individual items of array & for that we need to give it a name such as (item) <-This is callback name 
// forEach can't returns anythings, for that case we use filter()
// filter has a callback function where in we can accees individual values of an array
// but then it takes a condition based on which it returns a result
// Filter mtlb jo true h wahi paas hoga, map aur forEach ki trha nhi ke har item par iterate hoga

const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num > 4) 
console.log(newNums);                            // => [ 5, 6, 7, 8, 9, 10 ]

const newNums2 = myNums.filter( (item) => {
    return item > 4
})
console.log(newNums2);                          // => [ 5, 6, 7, 8, 9, 10 ]