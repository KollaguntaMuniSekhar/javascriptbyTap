const prompt=require("prompt-sync")();
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function mul(a,b){
    return a*b;
}
let a=Number(prompt("ENter the number"));
let b=Number(prompt("ENter the number"));
function calc(a,b,callback){
    return callback(a,b);

}
console.log(calc(a,b,add));