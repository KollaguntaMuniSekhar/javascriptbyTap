const btn=document.getElementById("main-head");
const out=document.getElementById("output");
function handleClick(event){
    out.textContent="the Button has been clicked"
    console.log("button is clicked");
    console.log(event);
    console.log(event.pointerType);
    console.log(event.type);
    console.log(event.currentTarget);
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event.button);

    
}
btn.addEventListener("click",handleClick);
function clrChnage(){
    //btn.style.backgroundColor="orange";
    btn.classList.toggle("btnclr")
}
btn.addEventListener("click",clrChnage)
btn.removeEventListener("click",clrChnage);