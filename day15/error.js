let c=require("prompt-sync")();
let n1=Number(c(" enter n1 here"));
let n2=Number(c("enter n2 here "))
function div(a,b){
    let  res

    if(b!==0){
    res=a/b;
    }
    else{
        throw  new Error("NOn zero denominator");
    }
    return res;
}
    try{
       let cb =div(n1,n2)
       console.log(cb);
    }
    catch(error){
        console.log(error.name);
    }
finally{

console.log("finished");
}