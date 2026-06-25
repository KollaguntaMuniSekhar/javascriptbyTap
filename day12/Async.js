//Async Promise 
function exmp(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Task completed");
            reject();
        },3000);
    });
}
 
async function run(){
  try{
        await exmp();
    console.log("Promise fullfilled");
  }
  catch(error){
    console.log("promise unfulffilled");
  }

}
run();