// for loop

for (let i = 0; i <= 10; i++) {
    console.log(`Outer Loop: ${i}`);
    for (let j = 0; j <= 10; j++) {
        console.log(`Inner Loop: ${j} Outer Loop: ${i}`);
    }
}

for (let i = 1; i <= 10; i++) {
    console.log(`Table of: ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
    }
}

let myArray = ["Flash", "superman", "Spiderman"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}