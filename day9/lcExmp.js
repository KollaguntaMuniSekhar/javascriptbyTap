
let firstName="Kollagunta Muni Sekhar";
function outerFunction(){
    let outerVar="From outer Function"
    function innerFunction(){
        let innerVar="From inner Function";
        console.log(innerVar);
        console.log(outerVar);
        console.log(firstName);
    }
    innerFunction();
}
outerFunction();