var a = 18;
{
    var a = 11;     // ! this a value has been shadowed to 11 only
    let b = 11;
    const c = 2005;
    console.log(a);
    console.log(b);
    console.log(c);
}
console.log(a);
// console.log(b);
// console.log(c);

// ! illegal shadowing is not allowed
let a = 20;
{
    var a = 20;
}

