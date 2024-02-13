function addTowNumbers(num1, num2){
    console.log(num1 + num2);
}

addTowNumbers(2,3) // => 5
addTowNumbers(2, "3") // => 23
addTowNumbers(2, "a") // => 2a
addTowNumbers(2, null) // => 2

function subtractTowNumbers(num1, num2){
    return num1 - num2
}

const result = subtractTowNumbers(4,1)

console.log("Result: ", result);

function loginUserMessage(userName = "Yoyo"){
    if(userName === undefined){
         console.log("Please enter a usename")
    } else {
    return `${userName} just logged in`
    }
}

console.log(loginUserMessage("Uzair"));
console.log(loginUserMessage()); // => undefined



function calculateCartPrice1(num1){ 
    return num1
}
console.log(calculateCartPrice1(200, 400, 600, 800)); // => 200


function calculateCartPrice2(...num1){ // rest operator, used to paas multiple arguments in a function
    return num1
}
console.log(calculateCartPrice2(200, 400, 600, 800)); // => [ 200, 400, 600, 800 ]


function calculateCartPrice3(value1, valu2, ...num1){ 
    return num1
}
console.log(calculateCartPrice3(200, 400, 600, 800)); // => [ 600, 800 ]

const user = {
    userName: "Uzair",
    prices: 199
} 

function handleObj(anyObj){
    console.log(`Username is ${anyObj.userName} & price is ${anyObj.price}`);
}

handleObj(user)
handleObj({
    userName: "Yoyo",
    price: 122
})

const myArr = [200, 400, 600, 800]

function returnSecondElement(getArray){
    return getArray[1]
}
console.log(returnSecondElement(myArr)); // => 400

function returnThirdElement(getArray){
    console.log(getArray[1]); // => 222
}

returnThirdElement([111, 222, 333, 444]);

