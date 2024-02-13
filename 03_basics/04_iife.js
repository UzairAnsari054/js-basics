// Immediately Invoked Function Expressions (IIFE)
// IIFE is a function that can be executed immediately, & we use it when,
// we don't want to remove Global scope's pollutuon which are variables, declartions.
// Also IIFE function are invoked and so we need to end them & we end them by adding ';' at the end of the IIFE function

(function chai() {                  // named iife
    console.log(`DB CONNECTED`);
})();

( () => {                           // unnamed iife
    console.log(`DB CONNECTED TWO`);
})();


( (name) => {
    console.log(`DB CONNECTED ${name}`);
})("Uzair");


