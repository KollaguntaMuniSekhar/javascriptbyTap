    const cont=document.getElementById("content");
    let count =0;
    console.log(cont.textContent)
    function increase(){
        count++;
       cont.textContent= count;
    }
    function decrease(){
        if(count>0){
        count--;
        cont.textContent=count;
        }
    }