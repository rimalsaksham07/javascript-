 const myNumbers = [1,2,3,4,5,6,7,8,9]

// const newNUms =myNumbers.map((num) => {return num + 10})
// console.log(newNUms);

// chaining ko method

const newNums = myNumbers
// ya j bhako xa naya array
.map((num) => num * 10)
// tyo array nai aba yo array ma pass hunxa
.map((num) => num + 1 )

console.log(newNums);

