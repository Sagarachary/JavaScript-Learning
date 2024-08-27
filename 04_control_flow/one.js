// if
// const isUserlogedIn = true
// const temperature = 41

// if(temperature<50){
//     console.log("less than 50");
// }else{
//     console.log("greater than 50");
// }
// console.log("Execute");




// Datatypes
//<,>, <=,>=, ==, !=, ===, !==

// const score = 200
// if(200>100){
//     const power = "fly"
//     console.log(`User power: ${power}`);  
// }
// console.log(`User score: ${score}`);

const balance = 1000

// if(balance>500){
//     console.log("Test");
// }
// else{
//     console.log("Test2");
// }

// if(balance>500){
//     console.log("less than 500"); 
// }else if(balance<750){
//     console.log("less than 750");
// }else if(balance<900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLogedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLogedIn && debitcard){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User loogedIn");
}
