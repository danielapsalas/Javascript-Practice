// Prototypical Inheritance


//Creating Your Own Prototypical Inheritance
// function Shape(color){
//     this.color = color;
// }
//
// function extend(Child, Parent) {
//     Child.prototype = Object.create(Parent.prototype);
//     Child.prototype.constructor = Child;
// }
//
// function Circle(radius, color) {
//     Shape.call(this, color);//Calling the Super Constructor
//     this.radius = radius;
// }
//
// extend(Circle, Shape);//Intermediate Function Inheritance
//
// Circle.prototype.duplicate = function () {//Method Overriding for the child - put it after extending the circle or else the implementation will disappear
//     console.log('duplicate circle');
// }
//
// Circle.prototype.draw = function () {
//     console.log('draw');
// }
//
// function Square(size){
//     this.size = size;
// }
//
// extend(Square, Shape);//Intermediate Function Inheritance
//
// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
}

// Circle.prototype = Object.create(Object.prototype);//objectBase
//REFACTORING - two lines below this
// Circle.prototype = Object.create(Shape.prototype);//this inherits from Shape.prototype instead of objectBase
// Circle.prototype.constructor = Circle;//Resetting the Constructor
//whenever you reset a prototype - make sure to reset the constructor as well


//Method Overriding
function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle() {//constructor

}

extend(Circle, Shape);//inheriting from shape

Circle.prototype.duplicate = function () { //redefine this AFTER extend, if we define this before the extend it'll disappear
    console.log('duplicate circle');//the implementation will call the child object version first
}

const c = new Circle();//new circle onject