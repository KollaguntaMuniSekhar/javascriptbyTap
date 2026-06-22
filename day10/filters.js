

let ages=[32,15,19,12];

let result=ages.filter((x)=>{ x>18?true:false
    if(x>18){
        return true;
    }
    else{
        return false;
    }
});
console.log(ages);
console.log(result);



let ages=[32,15,19,12];

let result=ages.filter(x=> x>18?true:false
    );
console.log(ages);
console.log(result);