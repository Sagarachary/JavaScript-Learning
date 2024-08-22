function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("R");
}


// sayMyName() 

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}
const result = addTwoNumbers(1,2)
// console.log("Result: " , result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please provide a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sagar"));

function calculateCartPrice(...num1){  // Rest Operator(...)
    return num1
}
// console.log(calculateCartPrice(200,400,600))

const user ={
    username : "Sagar",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);

handleObject({
    username : "Sam",
    price: 299
})

const myNewArray = [200,400,500,800]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,800]));



