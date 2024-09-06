a();
// b();

//! Function Statement / Declaration
function a(){
    console.log("a is called");
    
}

// ! Function Expression
var b = function(){
    console.log(" b called ");
    
}

// ! Anonymous Function
// function(){

// }

// ! Named Function Expression
var x = function xyz(){
    console.log("xyz is called");
    console.log(xyz);
    
}
x()

// ! First Class Function / First Class Citizen
let b = function (xyz){
    console.log(xyz);
    
}
function xyz(){
    console.log("hellow ayush");
    
}
b(xyz)