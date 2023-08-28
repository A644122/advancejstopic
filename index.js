// Hire order function///
// h.o.f aisha function hai jo k as a parameter ek fuction ko accept krta hai//

//H.O.F are function which accept a function in a parameter OR return a function or Both//;

// example//
// H.O.F
/*
function accept(val) {
  return val;

}

const result = accept(function (a, b) {
  return a + b;
});
console.log(result(20, 30));
 output-50
 */
// constructor//

// function student(Name,age,marks,Email){
//   this.Email=Email
//     this.Name=Name;
//     this.age=age;
//     this.marks=marks
//     console.log(this.Email);

   
// }




// const final=new student("Afroz","20",'120','mdafrozalam109@gmail.com');
// console.log(final);
 

function Car(){
  this.name="afroz";
  this.price='price';
  this.model='model';

}
  let emtyobj= new Car();
  

  console.log(emtyobj);

  function Main(name,age,roll,degination){

    this.name=name;
    this.age=age;
    this.roll=roll;
    this.degination=degination;

  }


  var DetailsAll= new Main("Ragav","20",'1',"software developer");
  var DetailsAll1= new Main("Sanawaz","30",'3',"Blockchain developer");

  console.log(DetailsAll);
  console.log(DetailsAll1);

var a=10;
var a=50;

console.log(this);
console.log(this.a);

function cdef(){
  var b=200;
  console.log(b);
  console.log(a)
  

}
 let bd=cdef()


 function funny(){
  console.log(this);
 }

//  object//

const persion={
  costltcity:"Bangloru",
 firstfn:function(){
  console.log(this)
  
 } 
}
console.log(persion);
 

 const h1=document.querySelector('h1');

 h1.addEventListener('mouseenter',function(){
  h1.style.fontSize='30px';
 });
 h1.addEventListener('mouseleave',function(){
  h1.style.fontSize='20px';
 })




