let myDate = new Date()
console.log(myDate.toString()); // => Mon Feb 12 2024 23:48:03 GMT+0000
console.log(myDate.toDateString()); // => Mon Feb 12 2024
console.log(myDate.toJSON()); // => 2024-02-12T23:48:03.303Z
console.log(myDate.toLocaleDateString()); // => 2/12/2024
console.log(myDate.toLocaleString()); // => 2/12/2024, 11:48:03 PM

console.log(typeof myDate); // => object

let myCreatedDate = new Date(2024, 0, 23)
console.log(myCreatedDate.toString());

let myCreatedDate2 = new Date("01-13-2024")
console.log(myCreatedDate2.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate2.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(newDate.getDay());
