
let ar=[[10,20],[30,40]];
console.log(ar);
let ar1=ar.slice();
console.log(ar1);
ar1[1].push(99);
console.log(ar);//two arrays changed because of address
console.log(ar1);