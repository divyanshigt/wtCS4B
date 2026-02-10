const student={
    name:"Ravi",
    age: 33,
    address:{
        city:"Gzb",
        state:"UP"
    }
}
const {name: stuname="Amit",age,address:{city}}=student;
// const name= student.name;
// const age= student.age;
console.log(stuname,age,city);
function displayStu({name,age}){
    console.log(`My name is ${name} and age is ${age}`);
}
displayStu(student);