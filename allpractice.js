/*
var a=10;
console.log(a);
 var a=20;
console.log(a);
let b=30;
console.log(b);
 b=40;
console.log(b);

const c=100;
console.log(c);
 c=300;
 */
// Hoisting//

// console.log(a);
// var a=10;

// spread operator//
// let number=[1,2,3,4,5,6];
// let clone=[...number];
// console.log(clone)
 
// let  fname=["Sadique"];
// let lname=['Reza'];

// const merge=[...fname,...lname];
// console.log(merge);
// what is the maximum number  and minimum number find in an array//
// let num=[1,2,3,4,0,-1,-3,-10,-1.0,5,6,200,635,84];

//  const maxnum=Math.max(...num);
//  console.log(maxnum);
//  const minimum=Math.min(...num);
//  console.log(minimum);

// DESTRUCTURE IN ARRAY AND OBJECT//
        
// const num=[1,2,3];
// const [a,b,c]=num;
// console.log(a);
// console.log(b);
// console.log(c);

// const student=['faizan','Akram','rohit','Sanawaj','Sarfaraz'];

// const[First,second,third,fourth,fifth]=student;
// console.log(First);
// console.log(second);
// console.log(third);
// console.log(fourth);
// console.log(fifth);



// DESTRUCTURE IN OBJECT//
const car={
    Name:"bmw",
    price:'$340',
    model:'TRW20'
}



const {Name,price,model}=car;
console.log(Name);

console.log(price);
console.log(model);









// const car1={
//     name1:"ferari",
//     price1:$480,
//     model1:'TRW80'
// }
// console.log(name1);
// console.log(price1);
// console.log(model1);


//  type casting//

// let a=10;
// let b="10";
// let c=a+b;
// console.log(c)


// const A=200;
// const B="300";

// const changestring=toString(A);
// console.log(typeof changestring);

// console.log(typeof B);
// const concate=A+B;
// console.log(concate);
// const A='hellow';
// const B="World";

// const changestring=toString(A);
// console.log(typeof changestring);

// console.log(typeof B);
// const concate=A + B;
// console.log(concate + '');

// rest operators//
//  const funny=function sum(...value){

//     return value;
// }

//  const a=funny(1,2,3,4,5,6,"Afroz alam" ,"mdafrozalam@gmail.com");
//  console.log(a);
// DATATYPS//
// REFERENCES DATA TYPE/
let a=10;
let b=a;
console.log(a);
console.log(b);

// Primative datatype//
// let num=[1,2,3,4];
// console.log(num);
// let num1=num;
// console.log(num1)
//  var d=num.pop();
//  console.log(num);
//  console.log(d);
//  console.log(num);

//


//

// function students(Name,age,marks){
//    this.Name=Name,
//    this.age=age;
//    this.marks=marks;
// }

 
//  const callfun=function students1(Name,age,marks){
//     students.call(this,age,Name,marks)
// }

// const result= new callfun("sfakat",20, '120')
// console.log(result)

function abcd(){
    console.log(this);

}

const obje={
    a:10,
    b:20,
    c:30
}

  console.log(abcd.call(obje));
 




