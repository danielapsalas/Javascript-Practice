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
// let x = prompt("enter a number: ");
// let y = prompt("enter second number");
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

// maxNumbers(x,y);

//2.write a function that checks if two numbers make up landscape image
function isLandscape(width, height){
    if(width > height){
        console.log("image is landscape");
    }else if(width < height){
        console.log("image is portrait");
    }else if(width === height){
        console.log("image is square");
    }else{
        console.log("error");
    }
}

// isLandscape(x,y);


//3.Fizzbuzz = divisible by 3 => fizz
//             divisible by 5 => buzz
//             divisible by both 3 and 5 => fizzBuzz
//             not divisible by 3 or 5 => input
//             not a number => 'not a number'
// let input = prompt("Enter a number: ")
function fizzBuzz(input){
    if(typeof input !== 'number') {
        console.log("Not a Number");
    }else if(input % 3 === 0 && input % 5 === 0){
        console.log("fizzbuzz");
    }else if(input % 3 !== 0 && input % 5 !== 0){
        console.log(input);
    }else if(input % 3 === 0){
        console.log("fizz")
    }else if(input % 5 === 0){
        console.log("buzz");
    }
}

fizzBuzz(7);

//check speed -
//speed limit = 70
//5 over speedLimit-> 1 point
//Math.floot(1.3)
//12 points -> suspended
let x = 5;
// function checkSpeed(speed){ //original
//     const speedLimit = 70;
//     let points = 0;
//     if(speed <= speedLimit){
//         console.log("ok");
//     }else if(speed > speedLimit){
//         for(i = 71; i <= speed; i += 5){
//             points += 1;
//             console.log("points: " + points);
//             if(points >= 12){
//                 console.log("license suspended");
//             }
//         }
//     }
// }

function checkSpeed(speed){
    const speedLimit = 70;
    const kmPerPoint = 5;

    if(speed <= speedLimit){
        console.log("Okay");
    }else{
        const points = Math.floor((speed - speedLimit) / kmPerPoint);
        if(points >= 12){
            console.log("License Suspended");
        }else {
            console.log("Points", points);
        }
    }
}



checkSpeed(75);