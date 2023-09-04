// callback///

// const calculatation = function calculate(a, b, callback) {
//   return callback(a, b);
// };

// const addition = function (a, b) {
//   return a + b;
// };
// const substraction = (a, b) => {
//   return a - b;
// };
// const multiple = (a, b) => {
//   return a * b;
// };
// const multiple1 = (a, b)=> a*b {
//
// };
// const result3 = calculatation(10, 20,multiple1);

// const result = calculatation(10, 20, addition);
// const result1 = calculatation(100, 20, substraction);

// const result2 = calculatation(5, 20, multiple);

// console.log(result);
// console.log(result1);
// console.log(result2);

// callback Hell//
/*
function allDetails(callback){
    
    console.log("My callback hell is going process");
    setTimeout(() => {
        const cheez='🌭🌭🌭';
        console.log("this is cheez",cheez);
        callback(cheez);
      
        
    },2000);
}
function Makedhoka(cheez,callback){
    setTimeout(() => {
        const dhosa= cheez +' 🍰🍰🍰';
        console.log("this my dhosa:",dhosa);
        callback(dhosa);
        
    }, 3000);
}
function Makepizza(dhosa,callback){
    setTimeout(() => {
        const pizza= dhosa +' 🍕🍕';
        console.log("this my dhosa:",pizza);
        callback(pizza);
        
    }, 4000);
}

allDetails((cheez)=>{
    console.log("hellow ",cheez)
    Makedhoka(cheez,(dhosa)=>{
        console.log("this my dhosa:",dhosa);
        Makepizza(dhosa,(pizza)=>{
            console.log("i got my pizza",pizza)
        })


    })
});
*/
// Again practices///
// callbackhell//
/*

function getfoo(callback){
    setTimeout(() => {
        const chicken='🍖🍖';
        console.log('Ye mera chicken hai',chicken);
        callback(chicken);

        
    }, 3000);
}
function Makesandwich(chicken,callback){
    setTimeout(() => {
        const sandwich=chicken+"🥪🥪🥪" ;
        console.log("ye mera sandwich bannah start huwa:",sandwich)
        callback(sandwich);
        
    }, 4000);

}
function Makeburger(sandwich,callback){
    setTimeout(() => {
        const burger=sandwich+"🍔🍔🍔" ;
        console.log("ye mera bargur bannah start huwa:",burger)
        callback(burger);
        
    }, 3000);

}
getfoo((chicken)=>{
    Makesandwich(chicken,(sandwich)=>{
        console.log("Mera sandwich ban ke ready hogai",sandwich);
        Makeburger(sandwich,(burger)=>{
            console.log('Mere burger vfinnally ready ho gai',burger);

        })
    });

});
*/
//
// promses///

//  var Ans=new Promise((resolve,reject)=>{
//     logIn=true;
//     if(logIn==true){
//         resolve("You are sucessfully register");
//     }
//     else{
//         reject("Your are not register !please correct th form");

//     }
// });

//  const finalresult=Ans.then((data)=>{
//     console.log(data);

// }).catch((data)=>{
//     console.log(data);
// }).finally(()=>{
//     console.log(" finally mujje smja aagai hai promise")
// })
// console.log(finalresult);

//  function getCheez(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const cheez='   Sadique reza';
//             // console.log("here is my cheez",cheez);
//             resolve(cheez);
            
//         }, 1000);
//     })
//  }

//  function MakeDhau(cheez){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const dhau= cheez + 'Dr.Sadique reza';
//             // console.log("here is my cheez",dhau);
//             resolve(dhau);
            
//         }, 2000);
//     })
//  }

//  function Makepizza(dhau){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             const pizza= dhau +'Dr.chand sultana';
//             // console.log("here is my cheez",pizza);
//             resolve(pizza);
            

            
//         }, 3000);
//     })
//  }
//  getCheez().then((cheez)=>{
//     console.log("Dr",cheez);
// return MakeDhau(cheez);

//  }).then((dhau)=>{
//     console.log("dr.",dhau);
//     return Makepizza(dhau);


//  }).then((pizza)=>{
//     console.log("finally get the deram job ",pizza);


//  }).catch(()=>{
//     // console.log()
//     // console.log("here some wrong! aletr")
//     prompt("here some wrong! aletr");
//     // console.log("here some wrong! aletr")
//  });

