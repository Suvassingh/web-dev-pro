// greater number 
let num1 = 5
let num2 = 8
if (num1 > num2){  
    console.log("num1 is greater");
 }
 else {
    console.log("num2 is gerater");
 }


//  check if it is number or not 


let score = ["23"]

if (typeof score === 'number'){
    console.log("it is a number");
}

else {
    console.log("it is not a number");
}





// boolean valur is true or false



let isloggedin = true;
if (isloggedin ){
    console.log("user is logged in");
}
else {
    console.log("user is not logged in");
}




// check is array is empty or not 


let myarray = []
if (myarray.length > 0 ){
    console.log ("array is not empty");
}
else{
    console.log(" array is empty");
}




let popularTeas = ["lemon tea", "green tea", "oolong tea"];
popularTeas.push("masala tea");
let softcopy = popularTeas;
softcopy.pop();


console.log(softcopy);





let topcities = ["kathmandu","pokhara","lalitpur"];
topcities.push("bhaktapur");
let hardCopyCities = [...topcities];
topcities.pop();

console.log (hardCopyCities);




let europeancities = ["paris","london","berlin"];   
let asianCities = ["kathmandu","delhi","beijing"];  
// let worldcities = [...europeancities,...asianCities]
// console.log(worldcities);
let worldcities = europeancities.concat(asianCities)
console.log(worldcities);   




let teaMenu = ["lemon tea","green tea","oolong tea","masala tea"]
console.log (teaMenu.length);
var lengthofarray = teaMenu.length;
console.log(lengthofarray);