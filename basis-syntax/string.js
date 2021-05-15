// strings 
console.log('hello, world');

let email = 'mahfoos@outlook.com';
console.log(email);

// string concatenation
let firstName = 'Mahfoos';
let lastName = 'Ahamed';

let fullName = firstName + ' ' + lastName;
console.log(firstName);

// getting characters
console.log(fullName[0]);


// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('@') // gettinf the index of paticular character

// common string methods
let result = email.lastIndexOf('n');

result = email.slice(0,10);

result = email.substr(0,10);

result = email.replace('m', 'w');

result = email.

console.log(result);

// template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
let output = 'the blog called ' + title + ' by ' + author + ' has ' + likes + ' likes' ;

// template string way
output = `The blog called ${title}  by ${author} has ${title} likes`;

// creating html templates
let html = `
 <h2>${title}</h2>
 <p>By ${author}</p>
 <span>This blog has ${likes} Likes</span>
`;


