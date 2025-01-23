// reduce in js
// current value and accumulator
// accumulator le index linxa
// current value le chai tesko current value use hunxa

const myNums = [1,2,3]


// const myTotal = myNums.reduce(function (acc , currval)  {
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval 
// } , 0)
// console.log(myTotal);
// let acc = 0
// const myTotal = myNums.reduce ( (acc , currval) => {
//     return acc + currval
// })
// console.log(myTotal);

const shoppingCart = [
    {
    itemname: "js course", 
    price: 999
    },
    {
        itemname: "js course", 
        price: 999

    },
    {  
        itemname: "js course", 
        price: 999
    }
]
let acc = 0
const price_pay = shoppingCart.reduce((acc ,item ) => {
     return acc + item.price
})
console.log(price_pay);

