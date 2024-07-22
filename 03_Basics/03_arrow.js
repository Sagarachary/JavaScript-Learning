const user = {
    username: "Sagar",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}


const chai =  () => {
    let username = "Sagar"
    console.log(this);
}


const addTwo = (num1, num2) => ({username: "Sagar"})


console.log(addTwo(3, 4))