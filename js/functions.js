//Functions

//Function Declaration - Syntax
//Hoisting moves all the function declarations to the top
// - You can call the function before its declared
walk();
function walk() {
    console.log('walk');
}

//Function Expression
//In anonymous function would have no name after function
//You can't call the function before its declared
let run = function (){
    console.log('run')
};



//argument objects - how to make a function with a varying number of parameters
function sum(){
    let total = 0;
    for(let value of arguments){
        total += value;
    }
    return total;
}

console.log(sum(1,2,3,4,5,10)); //25



//The Rest Operator
function sum2(...args){//REST operator not the spread operator, cant have a parameter after the rest operator
    return args.reduce((a,b) => a + b);
}

console.log(sum2(1,2,3,4,5,10)); //25

function discount(discount, ...prices){
    let total = prices.reduce((a,b) => a + b);
    return total * (1 - discount);
}

console.log(discount(0.1, 20, 30));



//Default Parameter
//ES6 - you can use default parameters but you either have to put
// them last or have a default parameter for every parameter after
function interest(principal, rate = 3.5, years = 5){
    return principal * rate / 100 * years;
}
