//Operators -  arithmetic, assignment, comparison, equality operators, ternary, logical, falsy/truthy, and operators precedence

//Arithmetic Operators
let x = 5;
let y = 10;

// console.log(x + y); //addition
// console.log(x - y); //subtract
// console.log(x * y); //multiply
// console.log(x / y); //divide
// console.log(x % y); //modulus - remainder od division
// console.log(x ** y); //exponentiation

//Increment Operator(++)
console.log(++x); //value changes based on where you increment/decrement

//Decrement Operator(--)
console.log(++y);


//Assignment Operators - shorthand way to use the arithmetic operators
let a;
let b;
console.log(a = a + 2);
console.log(b += 2);

//Comparison Operators
let z = 1;

//Relational Operators
console.log(z > 0);
console.log(z >= 1);
console.log(z < 1);
console.log(z <= 1);

//Equality Operators
console.log("Equality Operators");
console.log(z === 1);//strict quality - ensures both values will have the same type and value
console.log(z !== 1);

console.log('1' == z);//the value on the left will convert z(the item on the right) into a string


//Ternary/Conditional Operators
let points = 210;
let winTotal = points > 105 ? 'gold' : 'silver'; //if true you'll get gold if false you'll get silver


//Logical operators
// When using &&(and) both have to be true to be true, or else it'll be false
// When using ||(or) only one has to be true to be true, if both are false it'll be false
// Using !(not) will make something false
let p = true;
let w = false;
console.log(p && w); // Output: false
console.log(p || w); // Output: true
console.log(!p); // Output: false

//Logical Operators with Non-Boolean - truthy or falsy
//When passed a non-boolean you get a falsy like below
//falsy values
//undefined
//null
//0
//false
//''
//NaN

//Anything that is not Falsy -> Truthy

//false || 'Dani' //truthy
//false || 1 //truthy

let userColor = undefined;
let defaultColor = 'blue';
let currentColor = userColor || defaultColor;

console.log(currentColor); //will give me a truthy because of the string 'blue'


//operators Precedence - remember to use parenthesis to make your own precedence


