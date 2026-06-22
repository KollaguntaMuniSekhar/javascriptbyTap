
function createCounter(){
    let counter=0;
    
    return function(){
        counter+=1;
        console.log(counter);
    }
}
let CounterA=createCounter();
CounterA();
CounterA();
CounterA();
CounterA();

let counterB=createCounter();
counterB();
CounterA();
counterB();