function fun1(){

console.log("Fun1 execution started");
console.log("Fun1 execution ended");
}
function fun2(){
console.log("Fun2 execution started");

let start=Date.now();
let delay=5000;
let end=start+delay;
while(Date.now()<=end){

}
console.log("Fun2 execution ended");
}
function fun3(){
    console.log("Fun3 execution started");
    let start=Date.now();
    let delay=5000;
    let end=start+delay;
    while(Date.now()<=end){

    }
    console.log("Fun3 execution ended");
}
fun1();
setTimeout(fun2,5000);
setTimeout(fun3,2000);