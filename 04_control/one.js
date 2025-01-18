// // // if (true){
// // // { this is scope{}}
// // // }

// // const isUserLoggedIn = true
// // if(isUserLoggedIn == true){
// //     // enters in this block
// // }
// // /*
// // 2 <= 2 
// // < , 
// // */
// // if( 2 === "2"){
// //     // strict checking hunxa datatype pani check garxa 
// // }
// // if (2 === "2"){ // strict checking datatype pani check hunxa esma chai 
// //     console.log("true")
// // } else {
// //     console.log("Execute")
// // }

// const balance = 1000
// // if (balace > 500) console.log("test"); // implicity declare gareko yo 
// console.log("test2")

// if (balance > 500){
//     console.log("less than");
// } else if(balance == 1200){
//     console.log("print this")
// }


const userLoggedIn  = true 
const debitCard = true
const loggdInFromGoogle = false
const loggdInFromEmail = true

if (userLoggedIn && debitCard || loggdInFromEmail || loggdInFromGoogle){
    console.log("Allow to buy course");
}
