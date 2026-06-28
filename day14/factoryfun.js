//factory function to create jsObject
function createCar(name,cost,mileage){
    return {
        name:name,
        cost:cost,
        mileage: mileage,
        start:function(){
            console.log("car started");
        }
    };

}
const c1=createCar("Mercedes",89.89,8);
console.log(c1);
const c2=createCar("RangeRover",90.34);
console.log(c2);



// class DEMO{
//     name="nmmm";
//     age=25;

// }
// const d1=new DEMO();
// console.log(d1.name);
