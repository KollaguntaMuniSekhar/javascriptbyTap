let exmp={
        
  "name": "Apple MacBook Pro 16",
  "data": {
    "year": 2019,
    "price": 1849.99,
    "CPU model": "Intel Core i9",
    "Hard disk size": "1 TB"
  }
}
async function testRestApi(){
let data= await fetch("https://api.restful-api.dev/objects",{
    method:'POST',
    headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
        
    },
    body: JSON.stringify(exmp)
    
});
//console.log(data);
let txt=await data.json();
console.log(txt);
}
testRestApi();