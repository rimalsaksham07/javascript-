const user= {
    username: "saksham",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this)
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(user.username)
// console.log(this)

// function chai(){
//     let username = "saksham"
//     console.log(this.username);
// }
// chai()

// const addTwo =(num1 , num2 ) => {
//     return num1 + num2
// }
// console.log(addTwo(2,3))

// const addTwo = (num1 , num2) => (num1 + num2)

const addTwo  = (num1 , num2) => ({username: "saksham"})

console.log(addTwo(3,4))

