
// Vedio 1
// console.log(1);
// console.log(2);

// setTimeout(() => {    // Asyncronous
//     console.log('callback function fired');
// }, 2000);  //2000 milli secconds

// console.log(3);
// console.log(4);

// vedio 2
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     console.log(request, request.readyState);
// })

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
// request.send();


// vedio 3
// const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if (request.readyState === 4 && request.status === 200) {
//         console.log(request, request.responseText);
//     } else if(request.readyState === 4 ){
//         console.log('Could not fetch the data')
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/')
// request.send();


// Status Codes 
// 404  -  Wrong endpoint / not connected / cannot find 
// 200  - everthing is correct

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status




// Vedio 4
// const getTodos = (callback) => { 

//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);

//         if (request.readyState === 4 && request.status === 200) {
//         // console.log(request.responseText);
//         callback(undefined, request.responseText);
//         } else if (request.readyState === 4 ){
//         // console.log('could not fetch the data');
//         callback('Could not fetch the data', undefined);
//         }
//     });

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todoss/');
//     request.send();

// };

// console.log(1);
// console.log(2);

// getTodos((err, data) => {        // callback function
//     console.log('callback fired');
//     if (err){
//         console.log("Could not fetch the data");
//     }else{
//         console.log(data);
//     }
// });  

// console.log(3);
// console.log(4);


//  vedio 5

const getTodos = (callback) => { 

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
   

        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
        callback(undefined, data);

        } else if (request.readyState === 4 ){
        callback('Could not fetch the data', undefined);
        }
    });

    request.open('GET', 'todos.json');
    request.send();

};

console.log(1);
console.log(2);

getTodos((err, data) => {        // callback function
    console.log('callback fired');
    if (err){
        console.log("Could not fetch the data");
    }else{
        console.log(data); 
    }
});  

console.log(3);
console.log(4);



