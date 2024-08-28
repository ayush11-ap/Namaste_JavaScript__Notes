getName();  //! in this getName acts as an variable it allocates undefined before CE
console.log(x);
console.log(getName);// ! The function will be print as it is
`f getName(){
    console.log("Namaste Ayush");
}`


var x = 11;

// function getName(){
//     console.log("Namaste Ayush");
    
// }
let getName = () => {
    console.log("Namaste Ayush");
    
}

let getName2 = function(){
    // ! for this also it's same 1st it will allocate memory and store undefined only & treat it as another variable.
}