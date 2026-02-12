// Hoisting
console.log(x);
var x=20;
console.log(x);
var x=50;
// Functional scope
function myfunc(){
    var my=20;
    console.log(my);
}
myfunc();
// console.log(my); this will give reference error