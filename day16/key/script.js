//GEt all the elements

 const container=document.querySelector(".container");
 const minusBtn=document.querySelector("#min");
 const plusBtn=document.querySelector("#plus");
 const holder=document.querySelector("#holder");
 const input=document.getElementById("input");
 let count;
 count=0;
 plusBtn.addEventListener("click",()=> {
    count++;
    holder.textContent=count;
});
minusBtn.addEventListener("click",()=>{
    if(count>0)
    count--;
    holder.textContent=count;
});
container.addEventListener("click",(e)=>{
    console.log("You clicker"+e.target);
    console.log("tag name is"+e.target.tagName);
    console.log("tag name is"+e.target.id);
    console.log("at",e.target.textContent);

})

