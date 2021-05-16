// console.log(1);
// console.log(2);

// setTimeout(() => {    // Asyncronous
//     console.log('callback function fired');
// }, 2000);  //2000 milli secconds

// console.log(3);
// console.log(4);

const getTodos = () => { 

    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
    // console.log(request, request.readyState);

        if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
        } else if (request.readyState === 4 ){
        console.log('could not fetch the data');
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
    request.send();

};

getTodos();



// Status Codes 
// 404  -  Wrong endpoint / not connected / cannot find 
// 200  - everthing is correct

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Status