const user = {
    username: 'Sagar',
    price: 999,

    welcomeMessage: function(){
        // this keyword refers the current context.
        console.log(`${this.username}, Welcome to the website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "Deepak"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Sagar"
//     console.log(this.username);
// }
// chai()

const chai = () => {
    let username = "Sagar"
    console.log(this);
}


// chai()
// explicit retrurn
// const addTwo=(num1,num2) => {
//     return num1+num2
// }

// implesit return
// const addTwo=(num1,num2) =>  num1+num2

// const addTwo=(num1,num2) =>  (num1+num2)
const addTwo=(num1,num2) => ({username: "sagar"})

console.log(addTwo(2,3));


// const myArray = [1,2,3,4,5,6,7,8,9,10]
// myArray.forEach((element,index) => {
//     console.log(element);
// })