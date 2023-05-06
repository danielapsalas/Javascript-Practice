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

//factory function
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
//three things happen when you use the new operator
//1st : the new operator will create an empty object
//2nd : then it will set `this` to point to that object
//3rd : it returns the object from the function

//Each object has a constructor property and that references the function that was used to create that object

//functions and arrays are Objects



//adding or removing properties
// const circle4 = new Circle(10);
// circle4.location = {x: 1};
//
// // circle['location'] = {x: 1};
// //lets imagine we have a location property
// const propertyName = 'location';//you can use the bracket notation if you have special characters
// circle4[propertyName] = {x: 1};
// //how to delete properties you don't want the client to see
// delete circle['location'];



//Enumerating properties
const circle10 = new Circle(10);

//
for(let key in circle){
    if(typeof circle10[key] !== 'function')
        console.log(key, circle10[key])//you can use bracket notation to access a member
}

//how to get all they keys in an object - as an array
const keys = Object.keys(circle);
console.log(keys);

//does the object have a given property - check for existence
if('radius' in circle){
    console.log("Circle has a radius.")
}