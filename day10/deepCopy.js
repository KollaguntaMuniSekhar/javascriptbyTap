
let ar1=[
    [10,20],
    [30,40]
];
let ar2=structuredClone(ar1);
console.log(ar1);
console.log(ar2);
ar1[1].push(88);
console.log(ar1);
console.log(ar2);