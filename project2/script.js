/*
var first = document.querySelector("#contain");

var IMG = document.querySelector("#contain img");

first.addEventListener("mouseenter", function (event) {
  // console.log("click here")
  IMG.style.left = event.x + "px";
  IMG.style.top = event.y + "px";
});
first.addEventListener("mousemove", function (event) {
  // console.log("click here")
  IMG.style.opacity = 1;
});
first.addEventListener("mouseleave", function (event) {
  // console.log("click here")
  IMG.style.opacity = 0;
});
*/
var elem=document.querySelectorAll('.elem');
// console.log(elem)
elem.forEach(function(item){
    // console.log(item.childNodes[1]);
    item.addEventListener('mouseenter',function(){
        // item.style.backgroundColor="yellow"
        item.childNodes[1].style.opacity= 1

    });
    item.addEventListener('mouseleave',function(){
        // item.style.backgroundColor='transparent'
        item.childNodes[1].style.opacity= 0

    })
    item.addEventListener('mousemove',function(ev){
        // item.style.backgroundColor='transparent'
        item.childNodes[1].style.left=ev.x+"px"
        item.childNodes[1].style.top=ev.y+"px"


    })

})
