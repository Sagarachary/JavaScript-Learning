// singleton
// Object.create

// object literals

//  Lets declare a symbol in objects
const mysymbol = Symbol("Key1")

const JsUser = {
    name: 'Sagar',
    "full Name": "Sagar Achary",
    [mysymbol]: "key1",
    age: 22,
    location: "Aska",
    email: "sagar@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// One Way to declare the object is
console .log(JsUser.name);    
// But it's not a good Way to practice to declare the object.
// Lets Assume to declare the object as a investigate study
// console.log(JsUser['name']); // It's a good way to declare the object.
// console.log(JsUser[mysymbol]); 
// console.log(JsUser["full Name"]);

// change the value of the object
JsUser.email = "sagar@chatgpt.com";
//Freze the object
// Object.freeze(JsUser);
JsUser.email = "sagar@microsoft.com";
// console.log(JsUser);


// Use Function
JsUser.greetings = function (){
    console.log("Hello, I am Sagar");
}

JsUser.greetingsTwo = function (){
    console.log(`Hello, I am Sagar`); //here we use the string interpolation``
}
console.log(JsUser.greetingsTwo);
