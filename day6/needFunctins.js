
// let student1Marks=93;
// let student1MaxMarks =100;
// let student1Percentage =(student1Marks/student1MaxMarks)*100;
// let student1Grade;
// if(student1Percentage>=90){
//  student1Grade="A";

// }
// else if(student1Percentage>=80){
//     student1Grade="B";
// }
// else if(student1Percentage>=70){
//     student1Grade="C";
// }
// else if(student1Percentage>=60){
//     student1Grade="D";
// }
// else if(student1Percentage>=50){
//     student1Grade="E";
// }
// else{
//     student1Grade="F";
// }
// console.log(student1Grade);




// let student2Marks;
// let student2MaxMarks;
function calGrade(student2Marks,student2MaxMarks){

let student2Percentage =(student2Marks/student2MaxMarks)*100;
let student2Grade;
if(student2Percentage>=90){
 student2Grade="A";

}
else if(student2Percentage>=80){
    student2Grade="B";
}
else if(student2Percentage>=70){
    student2Grade="C";
}
else if(student2Percentage>=60){
    student2Grade="D";
}
else if(student2Percentage>=50){
    student2Grade="E";
}
else{
    student2Grade="F";
}
console.log(student2Grade);
}
calGrade(92,100);
calGrade(88,100);
calGrade(50,100);