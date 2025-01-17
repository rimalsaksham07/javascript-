// singleton  -constructor le baneko instance


// object literals

const JsUser = {
    name : "Saksham",
    age : 18,
    location : "BKT",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"]

}
// console.log(JsUser.name)
// console.log(JsUser["age"])

const mySym = Symbol("myKey1")

const JsUser1 = {
    "name" : "Saksham",
    [mySym] : "myKey",
    age : 18,
    location : "BKT",
    isLoggedIn : false,
    lastLoginDays : ["Monday" , "Saturday"],
    

}
// console.log(JsUser.name) esari access nai garna mildena
// console.log(JsUser["name"])
// console.log(JsUser[mySym])

JsUser.age = 19
// console.log(JsUser.age)

// JsUser.greeting  = function(){
//     console.log("Hello Js User")
// }
// console.log(JsUser.greeting())

JsUser.greeting2 = function(){
    console.log(`Hello ${this.name}`) // string interpoation
}
console.log(JsUser.greeting2())
