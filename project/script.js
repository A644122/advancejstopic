const Main=document.querySelector('#main');

const loveicon=document.querySelector('#icon');
console.log(loveicon);

Main.addEventListener('click',function(){
    // console.log("helo")
    loveicon.style.transform='translate(-50%,-50%) scale(1)';
    // loveicon.style.opacity=1;
    setTimeout(() => {
  
    loveicon.style.transform='translate(-50%,-50%) scale(0)';

    

        
    }, 3000);
})