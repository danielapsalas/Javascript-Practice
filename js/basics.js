//Basics - variables, constants, primitive types, objects, arrays, and functions

console.log("Start of Basics notes");

// declaring vs initializing
let myVariable2; //declaring
let myVariable3 = "Hello, world!"; //initializing the variable


//In this example, the let keyword is used to declare the variable, myVariable is the name of the variable, and "Hello, world!"
// is the value that the variable holds.
let myVariable = "Hello, world!";


//const - a const is used to declare a varaible that will not change
const mySecondVariable = "Hello, world! This can't change";


//theres two categories of types - primitives and reference types
//primitives types are string numbers, boolean, undefined, and null.
let name = 'Dani';// String Literal
let daniAge = '100'; // Number Literal
let trueOrFalse = true; // Boolean
let haveDogs = undefined; // Undefined - typeof would be undefined
let haveCats = null; // Null - typeof would be an object


// Javascript is Dynamic - js doesn't have floats or decimals, it just has 'numbers'
console.log(typeof name);


//Reference Types - Objects
let person = {
    name: 'Milo', //key value pairs
    age: 100 //key value pairs
}

//dot notation
person.name = 'Poky'//how to access the key value pairs
console.log(person.name);
//or
//bracket notation
person['name'] = 'Bear';
console.log(person['name'] = 'Bear');


//Arrays - an array is an object
let selectedColors = ['Pink', 'Purple'];
selectedColors[2] = 1;
console.log(selectedColors.length);


//Functions - performs a task or calculates a value
function greet(){ //void function - no parameters
    console.log("Hello - from function greet");
}

greet();

//performs a task
function greetName(name){ //name is a parameter
    console.log("Hello " + name);
}

greetName("Jane") //Jane is an argument supplied to the name parameter

//calculates and returns a value
function square(number){
    return number * number;
}

console.log(square(2));

console.log("End of Basics notes");