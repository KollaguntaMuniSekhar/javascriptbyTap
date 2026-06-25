// let prm=new Promise(()=>{

// });
// console.log(prm);

// let prm=new Promise((reject)=>{
//  console.log("Ecutor function...");
//  reject();
// });
// console.log(prm);
let prm=new Promise((reject)=>{
 console.log("Ecutor function...");
 reject("failure in code");
});
console.log(prm);
