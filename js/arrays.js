//Arrays basics



//Adding Elements
const numbers = [3, 4];
//End - using push to push elements to the end
//numbers.push(5, 6);//numbers = 3, 4, 5, 6

//Beginning - using unshift to put array elements to the beginning of the array
//numbers.unshift(1, 2)// numbers = 1, 2, 3, 4

//Middle - can go to a given position and add or remove elements
//0 is the number of elements you want to delete
//numbers.splice(2, 0, 'a', 'b')// numbers = 1, 2, 'a', 'b', 3, 4



//Finding elements(Primitives)
//returns the index of that element - if not found we'll get -1
numbers.indexOf('a');
//there's also lastindexof which will get the last index of an element
//you can use `.includes` to see if its there



//Finding elements(Reference Types)
//instead of using .includes use .find
//.find uses a predicate or a callback function
//we can use .findIndex as well
const courses = [
    {id: 1, name:'a'},
    {id: 2, name:'b'},
];

let course = courses.find(function (course){ //predicate or a callback function
    return course.name === 'a';
});

console.log(course)//we'll get the first element that matches the criteria



//Arrow functions
//making an arrow function version of the course fallback function
//you don't have to have parameters
let courseArrow = courses.find(course => course.name === 'a');
console.log(courseArrow);



//Removing an Array
let deleteNums = [1, 2, 3, 4];
//removing the end of an array
// let lastNum = deleteNums.pop();//output: 1,2,3
//removing the beginning of an array
// let firstNum = deleteNums.shift();//output 2,3
//removing the middle of an array
numbers.splice(2, 1); //1, 2, 4



//Emptying an array
let emptyNums = [1, 2, 3, 4];
let anotherNums = emptyNums;

//solution 1:
//numbers = [] //this will empty `emptyNums` but not `anotherNums`, use if you have a single reference

//solution 2:
//myArray.length = 0; //this will empty both



//Combining and slicing Arrays
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = first.concat(second); //just adds them together(concat)
console.log(combined);
//rewriting above code with the spread operator
const combined2 = [...first, ...second];//same as above

const slice = combined.slice(2, 4);//this slices the array - if you leave it empty it'll give you a copy



//iterating through an array
const iteratingArray = [1, 2, 3, 4];

for(let number of numbers){
    console.log(number);
}

numbers.forEach((number,index) => console.log(index, number));//both do the same thing but the arrow function can take a second parameter



//Joining Arrays
const numJoin = [1, 2, 3];
const joined = numJoin.join(','); //makes it a string and separates each array element with a comma
console.log(joined);

const message = 'This is my first message';
const parts = message.split(' '); //makes the string into an array
console.log(parts);



//sorting an array
const numberSort = [2, 3, 1];
numberSort.sort();
console.log(numberSort);//sorts it as [1, 2, 3]

numberSort.reverse();
console.log(numberSort);//sorts it as [3, 2, 1]

//how about an array of objects?
const newCourses = [
    {id: 1, name: 'Node.js'},
    {id: 2, name: 'Javascript'},
]

newCourses.sort(function (a, b){
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});

console.log(newCourses)



//Testing the Elements of an Array
const areTheyPositive = [1, 2, 3];

const allPositive = areTheyPositive.every(function(value){ //you can use some which makes it true if it finds at least one
    return value >= 0 ;
})



//filtering
const num6 = [1, -1, 2, 3];

const filtered = num6.filter((value => value >= 0));//copies the array but filters out what you don't want



//mapping an array
const mapNum = [1, -1, 2, 3];

const items2 = mapNum
    .filter(n => n >= 0)
    .map(n => ({value: n}))
console.log(items2)



//Reducing an array
const sumNum = [1, 2, 3, -1];

let sum = 0;
for(let n of sumNum)
    sum += n;
console.log(sum);

//now do the same with reduce
const sumTotal = sumNum.reduce((accumulator, currentValue) =>{
    return accumulator + currentValue;
}, 0);//you dont have to put 0

console.log(sumTotal)