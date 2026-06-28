let car={
    name:"bmw",
    start: function(){
        console.log( this.name+"  is start");
    },
    100:"century",
    " spca space":123,
    perform: function(){
        this.start();
        console.log("Car performance is good");
    }
}
//this will behave diff in function gives name and  in arrow function gives undefined
//1
// for(keys in car){
//     console.log(keys +": "+car[keys]);
// }


//2
// let c=Object.keys(car);
// for(let i=0;i<c.length;i++){
// console.log(c[i]+" :"+car[c[i]]);
// }

//3
// const values=Object.values(car);
// console.log(values);
// for(let elem of values){
//     console.log(elem);
// }
//4
// console.log(Object.entries(car));
car.start();
car.perform();