//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);  
}
// for(let i = 0; i<Array.length;i++){
//     const element = array[i];
// }

// console.log(a);

// Nasted Scope
function one(){
    const username = 'Sagar'

    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}
// one()
if(true){
    const username = 'Sagar'
    if(username === 'Sagar'){
        const website = " Youtube"
        // console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);


//  ++++++++++++++ Intresting ++++++++++++++

function addone(num){
    return num + 1
}
addone(2)


const addTwo = function(num){
    return num + 2
}

addTwo(5)