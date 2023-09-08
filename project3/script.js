var rect=document.querySelector('#center');

rect.addEventListener('mousemove',function(ev){
    console.log("heloo")
   
    var getrectangle= rect.getBoundingClientRect();
  
    var insiderect=ev.clientX - getrectangle.left;


    if(insiderect<getrectangle.width/2){
     var redcol=gsap.utils.mapRange(0,
        getrectangle.width/2,
        255,
        0,
        insiderect);
     gsap.to(rect,{
        backgroundColor:`rgb(${redcol}),0,0`,
      ease:Power4,
        

     })
    }else{
        console.log('right')
    }
})