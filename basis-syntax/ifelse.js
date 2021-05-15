// if statements
const age = 20;

if(age > 20){
    console.log('you are over 20 years old');
}

const ninjas = ['mahfoos', 'ahamed', 'umar'];

if(ninjas.length > 3){
    console.log('Thats a lot of ninjas');
}

// if- else

const password = 'pass';

if(password.length >= 8){
    console.log('that password is long enough!')
}else {
    console.log('password is not long enough!')
}

// else if 

const password = 'pass';

if(password.length >= 12){
    console.log('that password is might strong');

}else if(password.length >= 8){
    console.log('that password is long enough!')

}else {
    console.log('password is not long enough!')
}


// logical operators OR || and AND &&

const password = 'pass';

if(password.length >= 12 && password.includes('@')){
    console.log('that password is might strong');

}else if(password.length >= 8 || password.includes('p')){
    console.log('that password is long enough!')

}else {
    console.log('password is not long enough!')
}


// logical NOT (!)

let user = false;

if(!user){
    console.log('you must logged in to continue');
}

console.log(!true);
console.log(!false);

// break and continue

const scores = [50,25,0,30,100,20,10];

for(let i = 0; i < scores.length; i++){

    if (scores[i] === 0){
        continue;
    }
    
    console.log('your score: ', scores[i]);

    if(scores[i] === 100){
        console.log('congrates, you got the top score!');
        break;
    }
}