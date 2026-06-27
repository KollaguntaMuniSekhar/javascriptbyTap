

// fetch("https://catfact.ninja/fact")
// .then((res)=>res.text())
// .then((txt)=>{console.log(txt)
//     let p=JSON.parse(txt)
//     console.log(p)
// })
// .catch((error)=>console.log("api failed"));



// fetch("https://catfact.ninja/fact")
// .then((res)=>res.json())
// .then((txt)=>{console.log(txt)
// })
// .catch((error)=>console.log("api failed"));


 async function getCatFacts(){
    const data=await fetch("https://catfact.ninja/fact");
    
    const ttxt=await data.json();
    console.log(ttxt);

}
getCatFacts();
getCatFacts();
getCatFacts();

getCatFacts();