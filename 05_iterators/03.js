// for of 

const arr = [1,2,3,4,5]

for (const num  of arr) {
    // console.log(num);
} // increament gairakhnu parena

const greetings = "Hello World"
for (const greet of greetings) {
    if(greet == " "){
        continue
    }
    // console.log(greet)
    
}

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")

console.log(map);
