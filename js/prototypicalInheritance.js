// Prototypical Inheritance


//Creating Your Own Prototypical Inheritance
function Shape(color){
    this.color = color;
}

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);//Calling the Super Constructor
    this.radius = radius;
}

extend(Circle, Shape);//Intermediate Function Inheritance

Circle.prototype.draw = function () {
    console.log('draw');
}

function Square(size){
    this.size = size;
}

extend(Square, Shape);//Intermediate Function Inheritance

Shape.prototype.duplicate = function() {
    console.log('duplicate');
}

// Circle.prototype = Object.create(Object.prototype);//objectBase
//REFACTORING - two lines below this
// Circle.prototype = Object.create(Shape.prototype);//this inherits from Shape.prototype instead of objectBase
// Circle.prototype.constructor = Circle;//Resetting the Constructor
//whenever you reset a prototype - make sure to reset the constructor as well
