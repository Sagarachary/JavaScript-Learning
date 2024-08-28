// basic syntax of the switch statement
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march"
switch (month) {
    case "january": 
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;

    default:
        console.log("defult case match");
        break;
}