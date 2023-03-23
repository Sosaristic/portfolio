const navBar = document.querySelector(".nav-bar")
const menuBar = document.querySelector(".bars")
const dropdownOverlay = document.querySelector(".dropdown-overlay")
const dropdownContent = document.querySelector(".mobile-nav")


window.addEventListener("scroll", (e)=>{
    const scrollHeight = window.scrollY
if(scrollHeight > 0){
    navBar.classList.add("header-shadow")
}
else{
    navBar.classList.remove("header-shadow")
}
})

menuBar.addEventListener("click", onClickMenu)

function onClickMenu(){
    dropdownOverlay.classList.toggle("display-menu")
    dropdownContent.classList.toggle("toogle-mobile-nav")
}

function typingEffect(element, speed) {
    let text=element.innerHTML;
    element.innerHTML="";
   var i=0;
    var timer=setInterval(function(){
        if(i<text.length) {
            element.append(text.charAt(i))
            i++;
        }else{
            clearInterval(timer);
        }
    },speed)
}
console.log(document.body.scrollHeight)
