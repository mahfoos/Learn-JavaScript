// for loops

for(let i = 0; i < 5; i++){
    console.log('in loop: ' , i);
}

console.log('loop finished');

const names = ['Mahfoos', 'Ahamed', 'Umar'];

for(let i = 0; i < names.length; i++){
    //console.log(names[i]);
    let html = `<div> ${names[i]} </div>`;
    console.log(html);
}

// While loop

let i = 0;
while (i < 5){
    console.log('in loop: ', i);
    i++;
} 

const names = ['Mahfoos', 'ahamed', 'umar'];
let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}

// do while loops
let i = 5;
do {
    console.log(names[i]);
    i++;  
}while(i < 5);