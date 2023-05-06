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



//Getters and Setters
///Getter - used to access properties in an object
//Setter - change or mutate properties in an object
const person = {
    firstName: 'Dani',
    lastName: 'Salas',
    get fullName() {
        if(typeof value !== 'string')
            throw new Error("Value is not a string");
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try{
    person.fullName = ''
}
catch(e){
    alert(e);//you need something to catch the error above
}
person.fullName = 'Milo Salas';

console.log(person);

//going over try-catch(error handling) in person object
//common misconceptions, don't confuse errors with exceptions
//ex. error object
//const e = new Error(); //right now this is just an object
//throw e; //Once you throw the e its an exception



//The this keyword - references the object that is executing the current function
//method -> obj
//function -> global (window, global)

const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        }, this)
    }
};

video.showTags();