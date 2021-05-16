console.log(1);
console.log(2);

setTimeout(() => {    // Asyncronous
    console.log('callback function fired');
}, 2000);  //2000 milli secconds

console.log(3);
console.log(4);