let a;
a={
    name: "BMW",
    cost: 75.6,
    mileage: 8.6,
    start : function(){
    console.log("Car is starting");
   },
   stop : function(){
    console.log("car is stopping");
   },
   accelerate: function(){
    console.log("Car is accelerating")
   }


};
console.log(a.name);
a.stop();
console.log(a);