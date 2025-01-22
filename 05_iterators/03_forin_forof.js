// for of  = sidhai value auxa 
// for in = key auxa 

const arr = [1,2,3,4,5]

// -------------for of ------------------

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
// ---------- map use garera iterate----------------

// const map = new Map()
// map.set('IN' , "India")
// map.set('USA' , "United States of America")
// map.set('Fr' , "France")

// console.log(map);

// for (const [key,value] of map) {
//     // console.log(key , ':-' , value)

// }

// const myObject = {
// //     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }

// for (const [key , value] of myObject) {
//   //yo kam gardena
// }


// ------- object haru lai iterate garne ---------------------

const myObject = {
    js : "Javascript",
    cpp : "C++",
    rb : "ruby", 
    swift : "swift by apple"
}
for (const key in myObject) {
    // console.log(`${key} shortcut is for  ${myObject[key]}`);      
}


// ----------- array lai iterate garne ------------------

// const programming = ["js" , "rb" , "py" , "java"]

// for (const key in programming){
//     console.log(programming[key]);
// }


// map is not iterable

const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")

for (const key in map) {
    console.log(key)
}


// for of 
const arr1 = [1,2,3,4,5]
for (const items of arr1) {
    console.log(items);
}

const greetings1 = "hello world"
for (const greet of greetings1) {
    if(greet == " "){
      continue;
    }
    console.log(`Each char is ${greet}`);
}

// maps 
// array jastai ho tara iteration ko lagi 
// map ma chai unique value hunxa duplicate hudena



