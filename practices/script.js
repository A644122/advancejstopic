// HOF//
/*
function firstfun(another){
    console.log("This is my first function")
    return another
    
}

firstfun(another(2,4));

function another(a,b){
    total=a+b;
    console.log("the sum of a,b:"+ total);
    return total;
   
}

// CONSTRUCTOR FUNCTION/
function Normal(){
    this.Age=20;
    this.name="Sultan badsha"
}
Normal();

  var Newword =new Normal()
  console.log(Newword.Age);
 
//  

function students(name,rollno){
    this.name=name;
    this.rollno=rollno;
}

  var emptobj=new students("Sultan",20);
  var emptobj1=new students("Afreen",22);

  console.log(emptobj);
  console.log(emptobj1);


// IIFE->iMMDIATE INVOKE FUNCTION EXPRESSION//

var ANS=(function  ifeefun(){
   var private=100;

    return {
         setter:function(){
            console.log(private)


        },
        getter:function(val){
            private=val;

        }

    }


})();
 */
// Prototype and prototype inheritance//
// dunder__proto//
/*
let a=10;//number prototype hai

 var d=a.__proto__;
 console.log(d);

 let b='afroz';
 let e=b.__proto__;
 console.log(e);//string hai//

 String.prototype==b.__proto__;


// protype Inheritance//

var human={
    name:'adil',
   die:1239,
   nature:'brilient'

}

var persion={
    hobies:'capturing'

};


 var Truedega=human.__proto__ =persion;
 console.log(Truedega);
 */
// This keyword//
// this keyword ek special keyword hai javascript me//
// this keywords global scope me window belongs//
// var a=10; ye mera window ko belong karega//

function foo(){
    var b=10;
    console.log(this + b);
}
// Method me hamesh this refers karega parents//
/*
function firstfun(){

    var a=10;
    console.log(a)
  
    // console.log(a);
    another=function (a){
        console.log(this)///ye wla this parent ko belong krta hai Hamesh//
        console.log(a)
    }
  
}
firstfun()
*/
// call// bind() //apply();;
/*
var obj={
    fName:"moon",
    lName:"sum",
    Distance:'150 Million'
}
function abcd(){
   
    
}
console.log(abcd.call(obj.fName)) ;
abcd.bind(obj);
*/
// hoisting// variable ko banane se phaile use used karna//
// console.log(a)

// var a=100;
// console.log(a)
// udefine//
//  var a;
//  console.log(a)
// reference and primitive data type//

// reference datatype wo hota hai jiko copy karne par real copy nai hot ulke uska references pass ho jatah hai/// aur reference Dtype hamesh bracess ke ander hota hain//
// jis ka copy karne par real copy ho jata hai usko ham primitive datatype bolte hain
//  var a=100;
//   b=a;
//   console.log(b)
//   b=a +200;
//   console.log(b)
// 
// var a=[1,2]
// console.log(a)
//  b=a;
//  b.pop();
// FUNCTION//
// function  mainly 3types ke lia used hota hai//
//1 Agar ham ko pice of code ko turant nahi chalan hai tab ham function ko used kar sakte//
// 2 Agar ham ko pices of code ko dobara chalan ho tab v function used kar akte hai//
//3.Agar ham ko function me different different value  leke chalan ho to ham function ka used kar skate hai//

// muje hello turand nahi chalan ho to ham function ka used kar sakte hai jais example//
// rule no 1
//  console.log("helo");
// rule no 2//
//  function Helo(){
//      console.log("hello");

//  }
//  Helo();
//  Helo();

//  Helo();
//  rule no 3//
//  function add(a,b){
//     return a+b;
//  }
//   const Addition=add(10,20);
//   const Addition1=add(40,20);

//   console.log(Addition);
//   console.log(Addition1);
//   forEach method();;

// let a=[1,2,3,4];

// a.forEach((item)=>

// console.log(item+10));
// filter method()//
// var a=[1,2,3,4,10,12,20];

//  var ans=a.filter(function(val){
//     return val>=10
// });
// console.log(ans);

//  const newnum=a.filter((item)=> item>10);
//  console.log(newnum)

//  let b=[2,4,5,6,7,8,9];

//   const Ans=b.filter(function(value){
//     if(value%2 == 0){
//        return value;
//     }
    

//  });
//  console.log(Ans);
//  const c=b.map(function(item){
//     return item+10;

// });
//  console.log(c)
// filter method()//
const characters = [
    {
      name: "Luke Skywalker",
      height: 172,
      mass: 77,
      eye_color: "blue",
      gender: "male",
    },
    {
      name: "Darth Vader",
      height: 202,
      mass: 136,
      eye_color: "yellow",
      gender: "male",
    },
    {
      name: "Leia Organa",
      height: 150,
      mass: 49,
      eye_color: "brown",
      gender: "female",
    },
    {
      name: "Anakin Skywalker",
      height: 188,
      mass: 84,
      eye_color: "blue",
      gender: "male",
    },
  ];

//   const result=characters.filter((char)=>char.gender =="male");
//   const result1=characters.filter((char)=>char.gender == "female");
// const result2= characters.filter((char)=>char.mass>=100)
// const result2= characters.filter((char)=>char.mass<=100);
// const result2= characters.filter((char)=>char.mass<100);
// console.log(result2);

// const greater100Characters = characters.filter((character) => {
//     return character.mass > 100;
//   });
//   console.log(greater100Characters)

//   const shorterCharacters = characters.filter((character) => {
//     return character.height < 200;
//   });

//   console.log(shorterCharacters)





//   Object/
// for in loop ham hamesh object me used karte hai//
const obj1={
    program:"Hello world",
    language:"javascript",
    Author:"Brend Eich"
}

for( key in  obj1){
    // console.log(key);
    // console.log(obj1[key])
    console.log( key,obj1[key])

  

}

















