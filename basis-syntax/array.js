// Array
let ninjas = ['Mahfoos', 'Ahamed', 'Zaath'];

ninjas[1] = 'uzaith'; // overidding 
console.log(ninjas[1]);

let ages = [20,30,40,50];
console.log(ages[2]);

let random = ['Mahfoos', 'Ahamed',20, 30];
console.log(random);


console.log(ninjas.length); // count the element

let result = ninjas.join(',');  // join the array to on string
result = ninjas.indexOf('Mahfoos'); // getting the position
result = ninjas.concat(['umar','usman']); // temporaly  add into  the array
result = ninjas.push('new'); // permently add
result = ninjas.pop(); // delete the last element
console.log(result);