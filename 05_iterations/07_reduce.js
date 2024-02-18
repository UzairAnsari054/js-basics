const myNums = [1, 2, 3]

const myTotal = myNums.reduce( (acc, currValue) => {
    console.log(`acc: ${acc} and currVal: ${currValue}`);
    return acc + currValue
}, 0)
console.log(myTotal);

const myTotal2 = myNums.reduce( (acc, currValue) => acc + currValue, 0)
console.log(myTotal2);

const shoppingCard = [
    {
        name: "js course",
        price: 10
    },
    {
        name: "kotlin",
        price: 10
    },
    {
        name: "android",
        price: 10
    },
    {
        name: "ios",
        price: 10
    },
]

const cartValue = shoppingCard.reduce( (acc, item) => acc + item.price, 0 )
console.log(cartValue);