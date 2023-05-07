//prototypes
let person = {name:'Dani'};

Object.defineProperty(person, 'name',{
    writeable: false,
    enumerable: true //by default these are set to true
});

person.name = 'John';
console.log(Object.keys(person));

//constructor prototypes
//every object in js except the root object has a prototype or a parent

//The right way to get the protype of an object
//Object.getPrototypeOf(myObj); same as myObj.__proto__

function Circle(radius){
    //Instance Members
    this.radius = radius;

    this.move = function () {
        console.log('move');
    }
}

//Prototype Members
Circle.prototype.draw = function() {
    console.log('draw');
}

const c1= new Circle(1);

// Circle.prototype.toString = function (){
//     return'Circle with radius : ' + this.radius;
// }

//returns instance methods
console.log(Object.keys(c1))

// how to iterate instances and prototypes

//Returns all members, instance and prototypes
for(let key in c1) console.log(key);

//dont modify objects you dont own! dont override built in methods


//exercise 1 -
function Stopwatch() {
    let startTime, endTime, running, duration = 0;

    Object.defineProperty(this, 'duration',{
       get: function (){return duration;}
    });

    Object.defineProperty(this, 'startTime',{
        get: function (){return startTime;}
    });

    Object.defineProperty(this, 'endTime',{
        get: function (){return endTime;}
    });

    Object.defineProperty(this, 'running',{
        get: function (){return running;}
    });

    Stopwatch.prototype.start = function (){
        if(this.running)
          throw new Error('stopwatch has already started')

        this.running = true;

        startTime = new Date();
    }

    Stopwatch.prototype.stop = function (){
        if(!this.running)
            throw new Error('stopwatch is not started')

        this.running = false;

        this.endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration +=seconds;
    }


    Stopwatch.prototype.reset = function (){
        this.startTime = null;
        this.endTime = null;
        this.running = null;
        duration = 0;
    }

}