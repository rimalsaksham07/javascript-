const userEmail = "saksham@ai"
if (userEmail) {
    console.log("got user email");
}else {
    console.log("Dont have user email");  
}

// fasly values 
/*
1) False , 0 , -0 ,bigint 0n , "" , null , undefined , NaN
*/
// Truthy values 
/*
"0" => truthy value
'false' => truthyvalue
" " => 
[] => truthy 
{} => turthy
 function(){} this is also truhty value
*/

if (userEmail.length == 0){
    console.log("array is empty")
}

// nulish coalescing operator
// null ani undefined ko lagi banya ho yo chai 
let val1;
// val1 = 5 ?? 10 
val1 = null ?? 10
console.log(val1)
