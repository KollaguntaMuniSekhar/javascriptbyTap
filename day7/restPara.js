const scan=require("prompt-sync")();
let sum=0;
function add(...nums){
for(let a of nums){
   
   sum=sum+a;
   
}
return sum;
}
let res=add(10,20,30,40,50);
console.log(res);