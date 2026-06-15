// let row;
// row ="";
// row =row+"*";
// row=row+"*";
// row=row+"*";
// row=row+"*";
// row=row+"*";



// let i=1;
// let row;
// row ="";
// for(i=1;i<=5;i++){
//     row=row+"*";
// }

// console.log(row);
// row="";
// for(i=1;i<=5;i++){
//     row=row+"*";
// }
// console.log(row);
// row="";
// for(i=1;i<=5;i++){
//     row=row+"*";
// }
// console.log(row);
// row="";
// for(i=1;i<=5;i++){
//     row=row+"*";
// }
// console.log(row);
// row="";
// for(i=1;i<=5;i++){
//     row=row+"*";
// }
// console.log(row);
// //Don't claps that claps should feel like a laps


let prompt=require('prompt-sync')();
let n=prompt("Enter the n vaue");
let i;
let j;
let row;

for(j=1;j<=n;j++){
row ="";
for(i=1;i<=n;i++){
    if(i==1||i==n||j==1||j==n){
        row=row+"*";

    }
    else{
        row=row+" ";
    }
}
console.log(row);
}




