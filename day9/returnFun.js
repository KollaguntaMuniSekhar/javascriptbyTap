// function fun1(){
//     console.log("Inside func1()")
//         function fun2(){
//             console.log("Inside fun2");
        
//     }
//     return fun2;
// }
// exmp=fun1();
// exmp();



function outerFunction(){
    let outerVar=10;
    console.log("Outer Function started excution");
    function innerFunction(){
        console.log("Inner Function started excution");
        console.log("outer var",outerVar);
        console.log("Inner Function completed excution");
    }
    console.log("Outer function completed excution");

    return innerFunction;
}
    
  let Exmp=outerFunction();
Exmp();