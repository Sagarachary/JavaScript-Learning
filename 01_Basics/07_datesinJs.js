// Dates

let myDate = new Date()

let myCreatedDate = new Date("01-14-2023")

let myTimeStamp = Date.now()

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday: "Sort",
    
})
