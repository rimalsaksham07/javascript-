// // -------------date is important in js --------------
// let myDate = new Date
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

let myCreatedDate = new Date(2023 , 0 ,23)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date("01-14-2023")
console.log(myCreatedDate1.toDateString())

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
console.log(Math.round(Date.now() / 1000));

let newDate = new Date()
console.log(newDate.getDay())




