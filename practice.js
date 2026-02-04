// function sum(a,b){
//     return a+b;
// }
// function multi(a,b){
//     return a*b;
// }
// function divide(a,b){
//     return a/b;
// }   
// function calc(a,b,operation){
//     if(operation === "sum"){
//         return sum(a,b);
//     }
//     else if(operation === "multi"){
//         return multi(a,b);
//     }
//     else if(operation === "divide"){
//         return divide(a,b);
//     }
// }
// console.log(calc(10,5,"sum"));
// const calc =()=>({
//     add:(a,b) => a+b,
//     multi: (a,b)=> a*b,
//     divide: (a,b)=> a/b,
// });
// const calculator = calc();
// console.log(calculator.add(10,5));
// console.log(calculator.multi(10,5));
// console.log(calculator.divide(10,5));
let a = 10;
let b = 10;
let operation = prompt("Enter operation: sum, multi, divide");

switch (operation) {
    case "sum":
        console.log(a + b);
        break;
    case "multi":
        console.log(a * b);
        break;
    case "divide":
        console.log(a / b);
        break;
    default:
        console.log("Invalid operation");
}


