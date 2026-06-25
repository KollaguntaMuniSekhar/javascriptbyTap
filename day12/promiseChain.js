
function step1(){
    return new Promise(
        (reslove,reject)=>{
            console.log("Step1 started");
            setTimeout(()=>{console.log("step1 successful");
            reslove();
        },4000);
        }
    );
}
function step2(){
    return new Promise((resolve ,reject)=>{
        console.log("step2 started");
        setTimeout(()=> {
            console.log("step2 completed");
            resolve();
        },2000)
    });

}
function step3(){
    return new Promise((resolve ,reject)=>{
        console.log("step3 started");
        setTimeout(()=> {
            console.log("step3 completed");
            resolve();
        },2000)
    });

}
function step4(){
    return new Promise((resolve ,reject)=>{
        console.log("step4 started");
        setTimeout(()=> {
            console.log("step4 completed");
            resolve();
        },2000)
    });

}
// step1()
// .then(step2)
// .then(step3)
// .then(step4)
// .then(()=> console.log("All steps are successful"))
// .catch(()=> console.log("Promise failed"));
async function run(){
    try{
    await step1();
    await step2();
    await step3();
    await step4();
    console.log("Promise fullfilled");
    }
    catch(error){
        console.log("promise unfullfilled");

    }
}
run();