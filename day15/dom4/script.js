const box=document.querySelector("#box");
document.getElementById("highlight").onclick=function(){
   box.classList.toggle("highlight");
}
document.getElementById("rounded").onclick =function(){
    box.classList.toggle("rounded");
}
document.getElementById("shadow").onclick=function(){
    box.classList.toggle("shadow");
}
const i=document.getElementById("reset")
i.onclick=function(){
    box.classList.remove("higlight","shadow","rounded");
    // box.classList.remove("shadow");
    // box.classList.remove("rounded");
}