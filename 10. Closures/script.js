// function x(){
//     var a = 11;
//     return function y(){
//         console.log(a);
//     }
//     // return y;
// }

// var z = x();
// console.log(z);
// z() ;

function x(){
    var i = 11;
    setTimeout(() => {
        console.log(i);
    }, 3000)
}
x();
