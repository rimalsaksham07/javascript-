// singleton with the help of constructor

// const tinderUser = new Object() // yo chai singleton object ho 

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)


// nested object 

const regularUser = {
    email : "someone@gmail.com",
    fullname: {
        userfullname:{
            firstname: "saksham",
            lastname: "rimal"
        }
    }
}
//console.log(regularUser.fullname?.userfullname.firstname)

const obj1 = {1:"a" , 2:"b" }
const obj2 = {3:"a" , 4:"b" }

// const obj3 = Object.assign({} , obj1 , obj2)

const obj3 = {...obj1 , ...obj2}
console.log(obj3)

// destructuring  

const course = {
    coursename : "js",
    price: '100',
    courseInstructor: 'Name'
}

// course.courseInstructor
const {courseInstructor : instructor} = course;

console.log(courseInstructor)

// { this is jason it is the text format for storing data
//     coursename : "js",
//     price: '100',
//     courseInstructor: 'Name'

// }


