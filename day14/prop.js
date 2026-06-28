const car={
    name:"bmw",
    cost:45.5,
    "car seats":4
}
car.clr="blue";//add

car["no of tyres"]=4;
// console.log(car."car seats");//error

console.log(car["car seats"]);
console.log(car);
delete car.name;
console.log(car);


// ways to find name present
console.log(car.name);
console.log ("name" in car);
console.log(car.hasOwnProperty("name"));