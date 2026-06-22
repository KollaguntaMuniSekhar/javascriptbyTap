
let city="Bengaluru";
function showWeather(){
    let temperature=18;
    //let jacketNeeded=false;
    //console.log(jacketNeeded);
    if(temperature<=20){
       let jacketNeeded=true;
        console.log(`It's is chilled i ${city}. Tempature${temperature} degree Calsius`);
        console.log("Do you need a Jacket",jacketNeeded);
    }
   // console.log(jacketNeeded);
}
function greet(){
    console.log(`Welcome to ${city}`);
}
greet();
showWeather();