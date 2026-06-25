const prm=new Promise(
    function excutorFun(resolve,reject){
      console.log("Water has started  boiling");//automatically called.
        setTimeout(()=>{
           console.log("Water has been boiled");
           resolve();
        },2000);
    }
);
prm
.then(()=>{
    console.log("Promise fullfilled");
})
.catch(()=>{
    console.log("Promise unfullfilled");
});

setTimeout(()=>{
    console.log("MAcrotask");
},2000);