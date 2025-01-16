const name = "saksham "
const repoCount = 50 

//console.log(name + repoCount ) this is very outdated 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Saksham')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length)
console.log(gameName.charAt(2))
console.log(gameName.indexOf('a'))


const newString = gameName.substring(0,4)
console.log(newString)

const newString1 = gameName.slice(0,4) //negative value ni rakhna milxa esma chai 
console.log(newString1)

const newStringOne = "  saksham  "
console.log(newStringOne.trim())

const url = "https://saksham.com/saksham%20rimal"
console.log(url.replace('%20' , '-'))