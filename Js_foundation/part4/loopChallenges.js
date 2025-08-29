// sum of 5 numbers from 1 to 5

let sum = 0;
let i = 0;
while (i<=5){
    sum = sum + i;
    i++;
    
}
// console.log(sum);



// write a 'while' loop that counts down from  5 to 1 and stores the number in arrray named countdown

let countdown = [];
let j = 5;
while(j>=1){
    countdown.push(j);
    j--;

}

// console.log(countdown); 



// take input and stop while user say stop
// let teacollection = [];
// let tea 

// do {
//     tea =prompt(`enter your fav tea (type "stop" to finish )`);


//     if (tea !=="stop"){
//         teacollection.push(tea);
//     }
//     else{
//         break;
//     }
    
// } while (tea!=="stop");


// using dowhile add number from 1 to 3 and store in total
let total = 0;
let k = 1;
do {
    if (k<=3){
        total += k;
        k++;
    }

} while (k<=3);


// console.log(total);

// multiplication of array with constant 
let multipliedNumber = [];
let originalNumber =[2,4,6];
let takenumber; 
for (i=0;i<originalNumber.length;i++) {
    // takenumber = originalNumber[i] * 2;
    // multipliedNumber.push(takenumber);


    multipliedNumber.push(originalNumber[i]*2)
}
    // console.log(multipliedNumber);  


    let city = ["kathmandu","pokhara","butwal"]
    let newcity =[];
    for (i=0; i<city.length; i++) {
        newcity.push(city[i])
        
    }
    console.log(newcity);