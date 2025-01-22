// const coding = ["js" ,"ruby" ,"java" , "python"]

// // coding.forEach((items){
// //     console.log(items)
// // })

// // coding.forEach( (items) => {
// //      console.log(items)
// // })

// // function printMe(item){
// //     console.log(item)
// // }

// // coding.forEach(printMe)

// // coding.forEach( (item ,index ,arr) => {
// //     console.log(item , index , arr)     
// // })

// // array ko bhitra aba iterate garni paryo bhane ani array bhitra object xa
// const myCoding = [
//     {
//         language_name:"javascript",
//         language_file:"js"
//     },
//     {
//         language_name:"python",
//         language_file:"py"
//     },
//     {
//         language_name:"java",
//         language_file:"java"
//     }
// ]

// myCoding.forEach((item) => {
//     console.log(item.language_name);
// })
// // array ko bhitra object ko value ni auxa aba esma
// // ekdamai important ho yo chai database ma esari nai auxa value


// ------------------ for each loop --------------------------------
// const coding = ["js" , "ruby" , "java" , "python"]

// const values = coding.forEach((items) => {
//     console.log(items);
// })
// console.log(values)
// ---------------- esma chai return garna milena -----------------------


// aba hamlai kei return garnu paryo bhane filter use garne forEach le chai kei ni return gardena
const myNums = [1,2,3,4,5,6,7,8,9]

const newNums = myNums.filter ((items) => {
    return items
})
console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks = books.filter( (bk) => {
        return bk.genre == 'History'
})
const userBooks1 = books.filter( (bk) => {
        return bk.publish >= 2000 && bk.genre == "History"
})

console.log(userBooks)
console.log(userBooks1);


