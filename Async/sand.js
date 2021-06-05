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

// const getTodos = (callback) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {

//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//         callback(undefined, data);

//         } else if (request.readyState === 4 ){
//         callback('Could not fetch the data', undefined);
//         }
//     });

//     request.open('GET', 'todos.json');
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

// vedio 6
// const getTodos = (resource,callback) => {

//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {

//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText);
//         callback(undefined, data);

//         } else if (request.readyState === 4 ){
//         callback('Could not fetch the data', undefined);
//         }
//     });

//     request.open('GET', resource);
//     request.send();

// };

// console.log(1);
// console.log(2);

// getTodos('luigi.json',(err, data) => {        // callback function
//     console.log(data);
//     getTodos('todos.json', (err, data) => {
//         console.log(data);
//         getTodos('shaun.json', (err,data) => {
//             console.log(data);
//         })
//     })
//     // if (err){
//     //     console.log("Could not fetch the data");
//     // }else{
//     //     console.log(data);
//     // }
// });

// console.log(3);
// console.log(4);

// vedio 7
// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error getting resource");
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("luigi.json")
//   .then((data) => {
//     // i delete this parameter becasue it has one parameter
//     console.log("Promise resolved: ", data);
//   })
//   .catch((err) => {
//     console.log("Promise rejected", err);
//   });

// Promise example
// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//         // fetch something
//         //resolve('some data');
//        reject('some error');
//     });
// };

// getSomething().then((data) => {
//     console.log(data);
// }, (err) => {
//     console.log(err);
// });

// getSomething().then(data => {
//     console.log(data);  // resolve fire here
// }).catch((err) => {
//     console.log(err)  // reject fire here
// });

// vedio 8
// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error getting resource");
//       }
//     });

//     request.open("GET", resource);
//     request.send();
//   });
// };

// getTodos("luigi.json")
//   .then((data) => {
//     // i delete this parameter becasue it has one parameter
//     console.log("Promise 1 resolved: ", data);
//     return getTodos("shaun.json");
//   })
//   .then((data) => {
//     console.log("Promise 2 resolved:", data);
//     return getTodos("todos.json");
//   })
//   .then((data) => {
//     console.log("Promise 3 resolved:", data);
//   })
//   .catch((err) => {
//     console.log("Promise rejected", err);
//   });

// Vedio 9
// fetch api ... much less code and much easy

//   fetch('luigi.json').then((response) => {
//     console.log('Resolved', response); // here log the response object
//     return response.json();
//   }).then(data => {
//         console.log(data);
//   }).catch((err) => {
//     console.log('rejected', err);
//   });

// Vedio 10
// async & wait
// const getTodos = async () => {
//   const response = await fetch("shauns.json"); // await doing - hold the response reply untill not asign to the paticular const
//   console.log(response); // log the response object
//   const data = await response.json();
//   return data;
// };

// console.log(1);
// console.log(2);

// getTodos()
//     .then(data => console.log("resolved: ", data))
//     .catch(err => console.log('rejected: ',err));
// console.log(3);
// console.log(4);


// vedio 11
// Throwing error
const getTodos = async () => {
    const response = await fetch("shauns.json"); // await doing - hold the response reply untill not asign to the paticular const
    console.log(response); // log the response object
    
    if (response.status !==200 ) {
        throw new Error ('Cannot fetch the data');
    }
    const data = await response.json();
    return data;
  };
  
  console.log(1);
  console.log(2);
  
  getTodos()
      .then(data => console.log("resolved: ", data))
      .catch(err => console.log('rejected: ',err));
  console.log(3);
  console.log(4);