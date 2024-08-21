// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc",
tinderUser.name = "Sagar",
tinderUser.isLoggedIn = false

// console.log(tinderUser);

// Declare Object inside object

const regularUser = {
    email: "sagar@gmail.com",
    fullname:{
        Userfullname: {
            firstName: "Sagar",
            lastName: "Achary"
        }
    }
}

// console.log(regularUser.fullname.Userfullname.firstName);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
const obj4= {5:"e",6:"f"}

// const object3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2,obj4)
const obj3 = {...obj1, ...obj2,...obj4}
// console.log(obj3);


const users =[
    {
        id:1,
        email: "s@example.com"
    },
    {
        id:2,
        email: " john@ example.com"
    },
    {
        id:3,
        email: " john@example again.com"
    }
]

users[1].email
// console.log(tinderUser);


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



//Object Destructuring
const course ={
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Sagar"
}
// course.courseInstructor

const {courseInstructor: instructor} = course

console.log(instructor);

// // {
//     "name": "Sagar",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]



