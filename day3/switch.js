 const scan =require("prompt-sync")();
// let age=Number(scan("Enter the age:"));
// if(age){
// console.log("Your age is",age);
// }
// else{
//     console.log("Not valid");
// }
// if("0"&&"false"&&[] && {}&& 1=="1"){
//     console.log("This will run");
// }
// else{
//     console.log("Else will run");
// }


///for switch cases always strict comparison will happens

let value =Number(scan("Enter your rank"));
switch (value) {
    
        case 1:
        console.log("Number 1")
        break;
        case 2:
        console.log("Number 2")
        break;
        case 3:
        console.log("Number 3")
        break;
        
        

    default:
        console.log("You're not in top 3");
        break;
}