// Promise object represents the eventual completion (or failure) of an asynchronous operation and it's resulting value.
// Promise ka simple mtlb ke apne jo usse task diya h woh queue me lagge complete nhi hoga
// 3 states of Promise


// .then & resolve has direct connection

const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()                         
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// async await are just like .then().catch() except that it doesn't handels catch() gracefully if it does not use tryCatch     
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()





// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {            // yeh arrow function       h
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))


// // promise.all
// // yes this is also available, kuch reading aap b kro.

const promise = new Promise(function(resole, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            console.log("ZZZZZZZZZZZ");
            resole({name: "Uzair", age: 25})
        }else{
            console.log("SOOOOO SORRRRRRRY");
        }
    }, 1000)
}).then(function(user){
    return user.name
}).then(function(name){
    console.log(name);
}).catch(function(error){
    console.log(error);
}).finally(function (){
    console.log("Yeh toh hona hi tha");
})