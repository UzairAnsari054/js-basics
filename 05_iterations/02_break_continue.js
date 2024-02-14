for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("5 detected, break");
        break                       // When 'break' is encountered, the execution jumps out of the loop.
    }
    console.log(`Index is ${i}`);

}

for (let i = 0; i <= 10; i++) {
    if (i == 5) {
        console.log("5 detected, continue");
        continue                   // When 'continue' is encountered, the execution skips the rest of current iteration and proceeds to the next iteration.
    }
    console.log(`Index is ${i}`);

}