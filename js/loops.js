//going over loops - for, while, Do...while

//for loop - Used to repeat code multiple times. - The for loop is used to execute a block of code for a specific number of times. For example:
// i is only available inside the for loop because of scope
//let i = 0 - initializes the loop variable i to 0.
//i < 5 - This is the loop condition.
//i++ - This is the loop update expression
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while loop - The while loop is used to execute a block of code as long as a certain condition is true. For example:
let i = 0;
while(i <= 5){//conditional
    if(i % 2 !== 0) console.log(i);
    i++
}

//do...while - the difference between a while loop and do..while is that do..while be executed at least once even if the condition is false
let a = 0;
do{
    if(i % 2 !== 0) console.log(i);
    i++;
}while(i <= 5);

//for-in - is used to iterate over the properties of an object. Here's the basic syntax for a for...in loop:
// for (const property in object) {
//     // code to be executed on each property
// }

const person = {
    name: "Dani",
    age:100
}

for(let key in person){
    console.log(key, person[key])
}

//for-of - is used to iterate over the elements of an iterable object (such as an array or a string).
// for (const element of iterable) {
//     // code to be executed on each element
// }
const numbers = [1, 2, 3, 4, 5];

for (const number of numbers) {
    console.log(number);
}


//end of review exercises - simple exercise to solidify knowledge

//1.write a function that takes two numbers and returns the maximum of the two
let x = prompt("enter a number: ");
let y = prompt("enter second number");
function maxNumbers(x, y){
    if(x > y){
        console.log("maximum num is: ", x);
    }else if(x < y){
        console.log("maximum num is: ", y);
    }else if(x == y){
        console.log("numbers are even");
    }else{
        console.log("error try again...");
    }
}

maxNumbers(x,y);