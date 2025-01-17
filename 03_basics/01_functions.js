function sayMyName() {
  console.log("S");
  console.log("A");
  console.log("K");
  console.log("S");
  console.log("H");
  console.log("A");
  console.log("M");
}

// sayMyName()

function addTwoNumbers(number1, number2) {
  // sum = number1 + number2
  // return sum
  return number1 + number2;
}
const x = addTwoNumbers(3, 4);
// console.log(x)

function logInUserMessage(username = "sam") {
  if (username === undefined) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
// console.log(logInUserMessage())
//kei pass garena bhane undefined auxa

// shopping cart ko lagi

function calcluateCartPrice(val1 , val2 ,...num1) {
  return num1;
}
// console.log(calcluateCartPrice(2,3,4,5));

const user = {
    username: "saksham",
    price: 199
}
function handleObject(anyObject){
   console.log(`Username is ${anyObject.username}`)
}
// handleObject(user)

const myNewArray = [200, 400 ,100 , 600]

function returnSecondValue(getArray){
    return getArray[0]
}
console.log(returnSecondValue(myNewArray))