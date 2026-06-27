let weatherString = '{"location":{"city":"Bengaluru","country":"India"}}';
const parsedData = JSON.parse(weatherString); // Works fine
console.log(parsedData); 
console.log(parsedData.location);
console.log(parsedData.location.city)// Bengaluru
const response={
    success:true,
    message:"data received"
};
const cd=JSON.stringify(response);
console.log(cd);
