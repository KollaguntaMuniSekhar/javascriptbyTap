//object construcutor;
const car =new Object();
car.name ="BMW";
car.cost=70.2;
car.start= function(){
    console.log("car is started");
}
car.color="blue";
console.log(car.color);
car.racing =function(){
    console.log("car is ready for racing");
}
car.racing();