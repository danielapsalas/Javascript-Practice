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

let course = courses.find(function (course){
    return course.name === 'a';
});

console.log(course)//we'll get the first element that matches the criteria