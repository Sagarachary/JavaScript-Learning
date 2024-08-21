function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}



function addTwoNumbers(number1, number2){

    
    return number1 + number2
}

const result = addTwoNumbers(3, 5)



function loginUserMessage(username = "Sagar"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}



function calculateCartPrice(val1, val2, ...num1){
    return num1
}



const user = {
    username: "Sagar",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "Sagar",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue([200, 400, 500, 1000]));