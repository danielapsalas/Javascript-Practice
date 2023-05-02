//Going over basic control flow statements -  if, else, else-if, and switch

//if - The if statement is used to execute a block of code only if a certain condition is true. For example:
let x = 5;
if (x > 3) {
    console.log("x is greater than 3");
}

//else - The else statement is used to execute a block of code if the condition of an if statement is false. For example:
let y = 1;
if (y > 3) {
    console.log("x is greater than 3");
} else {
    console.log("x is less than or equal to 3");
}

//else if - The else if statement is used to add an additional condition to an if statement. For example:
let z = 5;
if (z < 3) {
    console.log("x is less than 3");
} else if (z < 6) {
    console.log("x is between 3 and 5");
} else {
    console.log("x is greater than or equal to 6");
}

//switch - The switch statement is used to execute different blocks of code based on different conditions. For example:
let fruit = "apple";
switch (fruit) {
    case "banana":
        console.log("This is a banana.");
        break;
    case "apple":
        console.log("This is an apple.");
        break;
    default:
        console.log("This is not a banana or an apple.");
        break;
}
