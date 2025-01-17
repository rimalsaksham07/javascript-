
// {} // this is scope
var c = 300  // this is global scope

if (true){
    let a = 10 
    const b = 20 
    var c = 30 
}

//console.log(a)
//console.log(b)
// console.log(c)  
// this is why var is not used becuase locally declare bhako ni globally garna milyo 
function one(){
    const username = "saksham"

    function two(){
        const website = "youtube" 
        console.log(username)
    }
    two()
}
//one()

if (true){
    const username = "saksham"
    if(username == "saksham"){
        const website = "youtube"
        // console.log(username + website)
    }
}
addone(5)

function addone(num){
   return num + 1
}


//expression ni bhanxa ellai 
// this is known as hoisting 
const addTwo = function(num){
    return num + 2
}
addTwo(5)