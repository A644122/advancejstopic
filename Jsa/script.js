const number =[10,20,30,40];
const result =number.filter(check);
function check(number){
    return number>=20;
}
console.log(result);

const arr=[2,4,5,8,];
const output=arr.map(double);
function double(arr){
    return arr*2;
}
console.log(output);
//map()//

const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);
function myFunction(num) {
    return num * 10;
  }
  console.log(newArr);


  