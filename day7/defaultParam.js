
// function greet(){
//     console.log("what's up how are you");
// }
// greet();
// let greet1=function (){
//     console.log(" how are you");
// }
// greet1();
// let greet2=()=> console.log("Hello world");
// greet2();

// (function (){
//     console.log("Good Morning");
// })();

const scan=require("prompt-sync")();
let name=scan("Enter your Name");
let age=Number(scan("Enter your age"));
function greet3(name="Guest User",age=18){
    console.log("Hello HOw are you "+name+"Age "+age);
}
greet3();
greet3(name,age);
//greet3("Kollagunta Muni Sekhar");