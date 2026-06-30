const name=document.getElementById("name");
name.setAttribute("placeHolder","Kollagunta Muni Sekhar");
name.setAttribute("maxLength",10);
name.getAttribute("placeholder");



const i=name.getAttribute("placeholder");
document.getElementById("he").textContent=i;
name.removeAttribute("placeHolder");