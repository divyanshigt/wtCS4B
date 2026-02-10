// function add(...number){        //... (restoperator)catch multiple values and convert into array
//    let total = 0;
// //    for(let i in number){
// //       total += number[i];
// //    }
// for(let i of number){
//     total+=i;
// }
//    return total;
// }
// console.log(add([1,2,3]));

// let a=[1,2,3,34,45,85];
// let[first,sec,...last]=a;
// console.log(first,sec,...last);

// let arr =[10,20,30];
// let arr2 =[40,50,60];
// let arr3 =[...arr,...arr2];
// console.log(arr3);

// function test(...args){
//     console.log(args);
// }
// let arr =[1,2,3];
// test(...arr);

// const ar = [2,3,4];
// ar.forEach(num => {
//     if(num%2==0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }
// });

// reverse =(str)=>{
//     let rev ="";
//     for(let i=str.length-1;i>=0;i--){
//         rev+=str[i];
//     }
//     return rev;
// }
// console.log(reverse("Hello World"));

const ar = [60,30,40];
ar.forEach(avg=> {
    if(avg>=40){
        console.log("Pass");
    }else{
        console.log("Fail");
    }
});
