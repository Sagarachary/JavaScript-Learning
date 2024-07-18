// singleton
// Object.create

// object literals

const mySym = Symbol("key1")


const JsUser = {
    name: "Sagar",
    "full name": "Sagar Achary",
    [mySym]: "mykey1",
    age: 22,
    location: "Odisha",
    email: "sagar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


JsUser.email = "Sagaar@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "Sagar@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());