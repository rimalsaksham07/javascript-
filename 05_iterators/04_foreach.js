const coding = ["js" ,"ruby" ,"java" , "python"]

// coding.forEach((items){
//     console.log(items)
// })

// coding.forEach( (items) => {
//      console.log(items)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item ,index ,arr) => {
//     console.log(item , index , arr)     
// })

// array ko bhitra aba iterate garni paryo bhane ani array bhitra object xa
const myCoding = [
    {
        language_name:"javascript",
        language_file:"js"
    },
    {
        language_name:"python",
        language_file:"py"
    },
    {
        language_name:"java",
        language_file:"java"
    }
]

myCoding.forEach((item) => {
    console.log(item.language_name);
})
// array ko bhitra object ko value ni auxa aba esma
// ekdamai important ho yo chai database ma esari nai auxa value
