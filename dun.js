// (function show(){
//     console.log("Welcome to CSB");
// })();
// const show =()=>{
//     console.log("Welcome to CSB");
// };
// show();
// function person(){
//     this.age=25;
//     setTimeout(function(){
//         console.log(this.age);
//     },1000);
// }
new person();
function person(){
    this.age=25;
    setTimeout(()=>{
        console.log(this.age);
    },1000);
}
new person();


