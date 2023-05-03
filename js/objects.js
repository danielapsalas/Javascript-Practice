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
    this.draw = function(){
        console.log('draw')
    }
}

let circle1 = new Circle(1); //when you use the new operator it makes an empty object
//apparently there's no difference between the two