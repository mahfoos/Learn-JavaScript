// console.log(1);
// console.log(2);

// setTimeout(() => {    // Asyncronous
//     console.log('callback function fired');
// }, 2000);  //2000 milli secconds

// console.log(3);
// console.log(4);


const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);

    if (request.readyState === 4) {
        console.log(request.responseText);
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();

// Status Codes 
// 404  -  Wrong endpoint / not connected / cannot find 
// 200  - everthing is correct

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status