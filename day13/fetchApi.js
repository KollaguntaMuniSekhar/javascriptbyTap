
fetch("https://cattfact.ninja/facttt")
.then((res)=>res.text())
.then((txt)=>console.log(txt))
.catch((error)=>console.log("api failed"));