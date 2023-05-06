//object literals
//an object in js es basically a collection of key value pairs
//object literals
// const circle = {
//     radius: 1,//properties - holds value
//     location: {//properties
//         x: 1,
//         y: 1
//     },
//     draw: function(){ //method - define logic
//         console.log('draw');
//     }
// }
//
// circle.draw();



//Factories - object literal syntax isn't ideal if it has behavior
// behavior - if it has more than one method
function createCircle(radius){
    return {
        radius,//properties - holds value
        draw: function () { //method - define logic
            console.log('draw');
        }
    }
}

const circle = createCircle(1);
circle.draw();
//another way to create a function - constructor function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);//the new operator makes an empty object - if you don't use new you'll get a global variable
