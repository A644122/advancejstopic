var first=document.querySelector('#centers');
// console.log(rect)

first.addEventListener('mousemove',function(event){
    // console.log("rectangle")
    
    var rectouter=first.getBoundingClientRect()
    // console.log(rectouter)
     var ev=event.clientX - rectouter.left;
    //  console.log(ev)
     if(ev < rectouter.width / 2){
      var result=gsap.utils.mapRange(0,rectouter.width /2,255,0,ev)
            gsap.to(first,{
                backgroundColor:`rgb(${result},0,0)`,
                ease:Power4,
            });
        }else{
            var result1=gsap.utils.mapRange(
                rectouter.width / 2,
                rectouter.width,
                0,
                255,
                ev)
            gsap.to(first,{
                backgroundColor:`rgb(0,0,${result1})`,
                ease:Power4,
            })
        }
       
     }
     
    

);

first.addEventListener('mouseleave',function(){
gsap.to(first,{
    backgroundColor :'white'
})
})
