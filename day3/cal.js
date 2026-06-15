const prompt=require("prompt-sync")();
let num=Number(prompt("Enter the first Number:"));
let operator=prompt("Enter the Operator(+,-,*,/,**,%,^):");
let num2=Number(prompt("Enter the secons number:"));
switch(operator){

        case "+": res =num+num2;
        break;
        case"-": res=num-num2;
        break;
        case"/": res=num/num2;
        break;
        case"%": res=num%num2;
        break;
        case"**": res=num**num2;
        break;
        case"*": res=num*num2;
        break;
        case"^": res=num^num2;
        break;
        default:
            console.log("Not valid");
}
console.log(`${num} ${operator} ${num2}= ${res}`);