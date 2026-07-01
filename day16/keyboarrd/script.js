
const ta=document.getElementById("ta");
ta.addEventListener("keydown",(e)=>{
    console.log(e.key);
    console.log(e.code);
    console.log(e.shiftKey);

})

const lin=document.getElementById("link");
lin.addEventListener("click",(e)=>{
     e.preventDefault();
});
let x="JavaScript";
const box=document.getElementById("box");
const h1=document.createElement("h1");
h1.textContent=x;
box.appendChild(h1);
