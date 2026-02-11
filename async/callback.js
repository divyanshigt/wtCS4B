// console.log("first instruction");
// console.log("second instruction");
// console.log("third instruction");
// function aa(){
//     console.log("first");
// }
// setTimeout(aa, 4000);

// let count=0;
// let id = setInterval(()=>{
//     console.log("Hello");
//     count++;
//     if(count===5){
//         clearInterval(id);
//     }
// },2000);
// function test(roll,next){
//     setTimeout(()=>{
//         console.log("Roll no is "+roll);
//         if(next) next();
//     },2000)
// }
// function test(roll,next,time){
//     setTimeout(()=>{
//         console.log("Roll no is "+roll);
//         if(next) next();
//     },time)
// }
// test(1202,()=>{
//         console.log("wait its getting downloaded");
//         test(1203, () => {
//             console.log("wait its getting downloaded");
//             test(1204, () => {
//                 console.log("wait its almost over");
//                 test(1243);

//             },1000);
//         },2000);
// },3000);
 let uteam =["rahul","sachin","rohit"];
 let flutterteam =["sundar","vijay","ajay"];
 function showmenu(){
    let operation;
   switch(operation){
    case 1:
        console.log(uteam);
        console.log(flutterteam);
        break;
    case 2:
        let test = [...uteam, ...flutterteam];
        console.log(test);
        break;

   }
}
function display(teamtype,option){
    showmenu();
}
display("uteam",2);
