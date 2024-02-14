// Javascrip is single thread language & everything in it is a process
// Global Execution Context which is refered to 'this' keyword that hold Window Object
// Function Execution Context
// Eval Execution Context which is a property of Global Object

// To execute files Js uses Javascrip Execution Context and it executes the files/programs in 2 phases
// 1st Phase: Memory Creation Phase/Creation Phase in which memory is allocated to the variables & declarations
// 2nd Phase: Execution Phase in which operation are executed

//Every time a Global Execution context will be created which will not be recreated for the same file/program
//Then Memory Creation Phase will occur where all the variables & declaration will be allocated in the memory without any value which is undefined.
//Also In Memory Creation Phase, every function declarations are treated as defination

//In Execution Phase, variables are assigned with their values
//but for every function a sandbox will be created containing New Variable Environment + Execution Thred
//Now for the newly created sandbox again the Memory Creation Phase will occur where all the variables & declaration will be allocated in the memory without any value which is undefined.
//Then again Execution Phase will ocuur and the variables are assigned with their values
//After  Memory Creation Phase & Execution Phase are completed the newly created sandbox will get deleted
//For every function in Execution Phase, the above steps will take place


// Call Stack - LIFO (Last In First Out)