let s1="cat";
let s2="b"+s1.slice(1);//Indirect of change but original doesn't change
console.log(s1);
console.log(s2);

let b="cat";
console.log(b);
b="b"+b.slice(1);
console.log(b);