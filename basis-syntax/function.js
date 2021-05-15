// function declaration

function greet(){
    console.log('Helllo');
}

// function expression

const speak = function(){
    console.log('good day');
};

greet(); // calling the function
speak(); 

// arguments & parameters

const speak = function(name){
    console.log(`good day ${name}`);
};

speak('Mahfoos');

const speak = function(name = 'Mahfoos', day = 'Morning'){
    console.log(`good ${day} ${name}`);
};

speak();

// returning values

const calcArea = function(radius){
     return 3.14 * radius **2;
    // console.log(area);
    //return area; // holding the area
};

const area = calcArea(5);
console.log(area);

// arrow function - dont use function keyword
const calcArea = (radius) => {
    return 3.14 * radius **2;
};

const area = calcArea(5);
console.log('area is', area);

//if one parameter
const calcArea = radius => {
    return 3.14 * radius **2;
};

const area = calcArea(5);
console.log('area is', area);

// single return value no need to return keyword
const calcArea = radius => 3.14 * radius **2;

// converting to aroow function
const greet = function(){
    console.log('hellooo');
};

const greet = () => 'helloo';

const result = greet();
console.log(result);


// functions

const names = 'Mahfoos';

const greet = () => 'hellooo';

let resultOne = greet();
console.log(resultOne);

// methods
let resultTwo = names.toUpperCase();
console.log(resultTwo);


// callbacks & foreach
const myFunc = (callbackfunc) => {
    let value = 50;
    callbackfunc(value);
};

myFunc(function(value){
    console.log(value);
});

myFunc(value => {
    console.log(value);
});


let peeople = ['Mahfoos','Ahamed','Umar','Usman','Zaith'];

const logPerson = (person, index) => {
    console.log(`${index} - helo ${person}`);
};

peeople.forEach(logPerson);

peeople.forEach(person =>{
    console.log(person);     // callback function
});

peeople.forEach((person,index) =>{
    console.log(index,person);     // callback function
});
