let s1="JavaScript";
let s2="JAVA";
console.log(s1==s2);//false
let s3="java";
console.log(s2==s3);//false
let s4="JavaScript";
console.log(s1==s4);//true
let s5= new String("JavaScript");
console.log(s4==s5);//true;
console.log(typeof s5)//object type
console.log(s4===s5);//false

