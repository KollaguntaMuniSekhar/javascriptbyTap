
let ar1=[10,20,30,40];
console.log(ar1);
//let ar2=[...ar1];//spread
let ar2=ar1.slice();//slice
console.log(ar2);
ar1.push(99);
console.log(ar1);
console.log(ar2);