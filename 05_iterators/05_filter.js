const coding = ["js" ,"ruby" ,"java" , "python"]

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);

// thus for each never return the value in function 

// thus we use filter so that it can return the values

const myNums = [1,2,3,4,5,6,7,8,9]
const myValues = myNums.filter((nums) => {
    return nums > 4
})
console.log(myValues);

