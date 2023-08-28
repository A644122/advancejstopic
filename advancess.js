//  const coding = ["js", "python", "C++", "C", "React", "typescript"];

//  const language =coding.forEach((items,index,arr)=>{
//       console.log(items);
//       console.log(index);
//       console.log(arr);

//    });
//  console.log(language);

// const number=[1,2,3,4,5,6,7,8,9,]
//  const result1=coding.filter((items)=>{
//     return  items>=5;
// });
// console.log(result1);
// forEach() method used///
// let manynum=[1,2,3,4,5,6,7,8,9,10];

// function print(item){
//     console.log(item);
// }
// manynum.forEach(print);
// Second way to used foreach method//
// const number=[1,2,3,4,5,6,7,8,9,];
//  const result=number.forEach((item)=> console.log(item));
//  console.log(result);
// third way//
// const number=[1,2,3,4,5,6,7,8,9,];
//  const result =number.forEach((value)=>{
//       console.log(value);
// });
// console.log(result);

// const number=[1,2,3,4,5,6,7,8,9,10];
// const Newarray=[]
//  const result=number.forEach((num)=>{
//     if(num > 5){
//          Newarray.push(num);
//     }
// });
// console.log(Newarray);
// console.log(result);

// const somenum=[1,2,3,4,5,6,7,8,9,10];

// function print(num){
//     console.group(num);
// };
//  const result1=somenum.filter(print);
//  console.log(result1);
// one way to write a filter method//
//  const final=somenum.filter((num)=> num >8);
//  console.log(final);
// Second way to used filter method////
//  const result1=somenum.filter((num)=>{
//     return  num >5;
// });
// console.log(result1);
/*
const Students=[
    {
        Name:"sanjar",
        age:"20",
        Education:"diploma holdar",
        address:"Hatwar"
    },
    {
        Name:"indekhab",
        age:"22",
        Education:"Enginner",
        address:"kanpur"
    },
    {
        Name:"shahansha",
        age:"24",
        Education:"Manager",
        address:"pune"
    },
    {
        Name:"adil",
        age:"25",
        
        Education:"computer science",

        address:"delhi"
    },
    {
        Name:"faiyaz",
        age:"21",
        Education:"computer science",
        address:"mumbai"
    },
    {
        Name:"Munnna",
        age:"27",
        Education:"computer science",
        address:"mumbai"
    },
    {
        Name:"Ashgar",
        age:"29",
        Education:"computer science",
        address:"mumbai"
    },
    {
        Name:"haider",
        age:"26",
        Education:"computer science",
        address:"mumbai"
    }
];
*/
//  const finalresul=Students.filter((std)=> std.Education === 'computer science');

// const finalresul=Students.filter((std)=>{
//      return std.age === '21';
// });
// const finalresul=Students.filter((std)=>{
//     return std.age <= 21;
// });
//  console.log(finalresul);

// Map method use here//

// let num=[1,2,3,4,5];
// one way to write map() used
// function addsum(num){
//     return num +20;
// };

//  const result=num.map(addsum);
// console.log(result);
// Second way to use map() method//
// let num=[1,2,3,4,5];
// console.log(num);

//  const result=num.map((num1)=>{return num1*2 });
//  console.log(result);
// Third way///
// const result =num.map((nums)=> nums /2);
// console.log(result);

// Reduce() method//
let num=[1,2,3,4,5];

const result=num.reduce((acc,val)=>{
    // console.log(acc);
    // console.log(val);
    Total=acc +val;
    return Total;


},0);
console.log(result)







