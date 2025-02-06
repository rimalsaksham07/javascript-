// const promiseOne = new Promise((resolve , reject) =>{
//     // do and async task
//     // async call => DB calls , cryptography , netwrok

//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     },1000)

// }) // callback dinxa

// // consumption
// promiseOne.then(function(){ // resolve lai function call garya jastai ho
//     console.log('Promise consumed')

// }) // reslove connected with then

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Async Task 2");
//     resolve();
//   }, 1000);
// }).then(function () {
//   console.log("Async 2 resolved");
// }); // consumption

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     resolve({
//       username: "Chai",
//       email: "sakshamo345@gmail.com",
//     });
//   }, 1000);
// });
// promiseThree.then(function (user) {
//   console.log(user.username);
//   console.log(user.email);
// });

// const promiseFour = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "Saksham", password: 123 });
//     } else {
//       reject("ERROR: something went wrong ");
//     }
//   }, 1000);
// });

// // aba then le chai resolve lai linxa catch le reject lai linxa

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     // ellai chaining bhanxa
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally((user) => {
//     console.log("The promise is either resolved or rejected");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = false;
//     if (!error) {
//       resolve({ username: "js", password: 123 });
//     } else {
//       reject("ERROR: js went wrong ");
//     }
//   }, 1000);
// });

// async function consumedPromiseFive() {
//   try{
//     const response = await promiseFive;
//   console.log(response);
//   }catch(error){
//     console.log(error)
//   }
// }
// consumedPromiseFive()


// async function getAllUsers() {
//    try{
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await(response.json()) // ellai pani await garaunu parxa 
//     console.log(data)
//    }catch(error){
//     console.log(("E:", error));
//    }
// }
// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users') // fetch ko priority dherai hunxa tei bhayera first ma call hunxa 
.then((response) => {
    return response.json()
})
.then((data) =>{
    console.log(data)
})
.catch((error) => {
  console.log(error)
})

// fetch is an exciting feature in js 
// it is used for web request 


