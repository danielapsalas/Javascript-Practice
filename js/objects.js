//object-oriented programming (OOP) -
// a program as collection of objects that talk to each other
// to perform functionality
let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() { //if a function is inside a object - we call it a method
        console.log('draw');
    }
};

//factory function
//A factory function in JavaScript is a function that creates and returns
// a new object without using the new keyword. It is called a factory
// function because it generates new objects similar to a factory producing
// products.
function createCircle(radius){
    return {
        radius: radius, //same as radius without semicolon
        draw(){//function() { //if a function is inside a object - we call it a method
            console.log('draw');
        }
    };
}

// let bigCircle = createCircle(10);
// console.log(bigCircle.draw())


//Constructor function -
//The job of this function is to construct or create an object
//Naming conversion for constructor functions is pascal notation
function Circle(radius){
    this.radius = radius;//this keyword is used to reference the object that is executing this code
    this.draw = function(){ //draw and radius are properties
        console.log('draw')
    }
}

// let circle1 = new Circle(1); //when you use the new operator it makes an empty object
//apparently there's no difference between the two

//Constructor Property
const circle2 = createCircle(1);
//typing in console circle2.constructor
//this will return our circle function that we used to create this object


//typing in console another.constructor
//this will return our circle function that we used to create this object
const another = new Circle(1);


//Value Types - primitives -Number, String, Boolean, Symbol(ES6), undefined, and null
//x and y are completely independent of each-other
//primitives are copied by their value
let x = 10;
let y = x;

x = 20;

//Reference Types - Objects - Objects, Function, and Array
//the object isn't stored in the variable but in the memory, the changes are visible to the other
//objects are copied by their reference
let a = {value: 10};
let b = a;

a.value = 20;



//enumerating properties of an object
let circle3 = {
    radius: 1,
    draw(){
        console.log('draw');
    }
};

for(let key in circle){ //for in loop
    console.log(key)
}

for(let key of Object.keys(circle)){//for of loop - cant use it with objects because objects aren't iterable, Object.keys returns the keys as an array of strings making it iterable
    console.log(key);
}

for(let key of Object.entries(circle)){//for of loop - returns keys as an array of arrays
    console.log(key);
}

if('radius' in circle3){//how to check if a given property is an object
    console.log("yes")
}