// booleans and comparisions
console.log(true, false, "true", "false");

// methods can return booleans
let email = 'umahfoosahamed@gmail.com';
let names = ['Mahfoos', 'Ahamed', 'Umar']; 

let result = email.includes('@');
result = names.includes('Mahfoos');
console.log(result);

// comparision operators
let age = 25;

console.log(age == 25);  // true
console.log(age == 40); // false
console.log(age != 25);
console.log(age > 20);
console.log(age < 20);
console.log(age <= 25);
console.log(age >= 25);

// loose comparision (different types can still be equal)
console.log(age == 25); // true
console.log(age == '25'); // true

// strict comparision (different types cannot br equal)
console.log(age === 25);  // true
console.log(age === '25'); // false

// String comparisions
let names = 'mahfoos';

console.log(names == 'Mahfoos');
console.log(names == 'mahfoos');
console.log(names > 'ahamed'); 

