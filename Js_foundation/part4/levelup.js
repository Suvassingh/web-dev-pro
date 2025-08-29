
let collection = ["green tea ","black tea","chai"];

let news = [];


for (let i=0;i<collection.length;i++) {
    if (collection[i] !== "chai") {
        break;
    }
 news.push(collection[i]);

    
}
        // console.log(news);

// skip one element and store other in new array


let city = ["london","paris","berlin"];
let newcity = [];
 for (let i=0;i<city.length;i++) {
    if (city[i]==="paris" || city[i]==="Paris"){
        continue;
    }
    newcity.push(city[i])
 }
//  console.log(newcity);



//  use for of loop and 


let bignumber = [ 1,2,3,4,5];
let smallnumber =[];
for ( const num of bignumber) {
    if (num === 4){
        break;
    }
   smallnumber.push(num);

    
}
// console.log(smallnumber);


// for-of

let chai = ["chai ","green tea ", "herbal tea ", "black tea " ,];
let preferredtea =[];


for (const tea of chai) {
    if ( tea === "herbal tea "){
        continue;
    }
    preferredtea.push(tea); 
}
// console.log(preferredtea);



let cities ={ 
    "london":890000,
    "New York":8400000,
    "Paris":2100000,    
    "Berlin ":3500000 ,
}

let citypopulation ={};


for (const ct in cities) {
    // key = value 
    if (ct === "Berlin "){
        break;
    }
    citypopulation[ct] = cities[ct] ;
}
// console.log(citypopulation);    



// 


let worldcities = {
    "sydney":5000000,
    "Tokyo":9000000,
    "Berlin":3500000,
    "Paris":2200000,
}

let largecities={};
for (const large in worldcities) {
    if (worldcities[large]< 3000000) {

        continue ;
    }
    // key = value 
    largecities[large] = worldcities[large] ;
}
console.log(largecities);   







// for each loop

let chais = ["chai ","green tea ", "herbal tea ", "black tea " ,];
let availablechais =[];
chais.forEach(function(tea){
    if (tea === "herbal tea "){
        return;
    }
    availablechais.push(tea); 
    }
)
// console.log(availablechais);     





// 


let city1 = ["london","paris","berlin","sydney","tokyo"];
let travelledcity= [];

city1.forEach(function (city){
    if (city === "berlin"){
        return;
    }
    travelledcity.push(city);
})
// console.log(travelledcity); 


//  multiplication by 2 


let number = [ 2,5 ,7, 9 ];
let doublenumber=[];
   
for (let index = 0; index < number.length; index++) {
    if (number[index]===7){
        continue;
    }
    doublenumber.push(number[index]*2)
    
}
// console.log(doublenumber);  




let a = ["chai","green tea","herbal tea","black tea"];  
let b =[];
for (const short of a) {
    if (short.length>8){
        break;
    }
    b.push(short);
    
}
console.log(b); 