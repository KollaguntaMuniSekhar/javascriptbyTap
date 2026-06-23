// let a=10;
// let b=20;
// let result=a+b;
// console.log(result);
function task1(){
    console.log("Task1 started.");
    let start=Date.now();
    let delay=5000;
    let end =start+delay;
    console.log("Task1 excuuting.");
    while(Date.now()<=end){

    }
    console.log("Task1 completed.");
}
function task2(){
    console.log("Task2 started..");
    let start=Date.now();
    let delay=3000;
    let end=start+delay;
    console.log("Task2 is excuting..");
    while(Date.now()<=end){

    }
    console.log("Task2 completed..");
}
function task3(){
    console.log("Task 3 started...");
    let start=Date.now();
    let delay=1000;
    let end=start + delay;
    console.log("Task 3 is excuting...");
    while(Date.now()<=end){

    }
    console.log("Task3 is completed...")
}
task1();
task2();
task3();