// switch statements
const grade = 'D';

switch(grade){
    case 'A':
        console.log('You got an A');
        break;

    case 'B':
        console.log('You got an A');
        break;

    case 'C':
        console.log('You got an A');
        break;

    case 'D':
        console.log('You got an A');
        break;

    case 'E':
        console.log('You got an A');
        break;

    default:
        console.log('Not valid grade')
}

// using if statements
if(grade === 'A'){
    
}else if (grade === 'B'){

}else if (grade === 'C'){

}else if (grade === 'D'){

}else if (grade === 'E'){

}else {

}

// variables and block scope

let age = 30; /// global scope access anywhere 

if(true){
    let age = 40; // local scope only access inside this
    let name = 'Mahfoos'
    console.log('outside code ablock: ', age, name);
}

console.log('outside code ablock: ', age);