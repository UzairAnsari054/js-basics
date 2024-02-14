// '==' checks for similar value
// '===' checks for similar value & similar data type

const month = 3

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        //break;              // If the execution reaches and matches a block/case which don't have a 'break;' keyword, then it will continue to execute further cases without matching until the execution encounters a 'break' keyword. It will also execute the 'default case' if prior case don't have 'break' keyword.
    case 4:
        console.log("Apr");
        //break;
    case 4:
        console.log("May");
         
    default:
        console.log("default");
        
}