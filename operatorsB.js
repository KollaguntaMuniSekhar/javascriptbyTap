console.log(false && 'hello');
console.log(0 && 'hello');
console.log('' &&'hello');
console.log(123&& 0);


//first falsy value
//last truthy value
console.log('hi'&& 'hello');


//or is 
// the first truthy value
console.log(true||'hello');
console.log(""||"default");
console.log(""||null||"this");

///not operator

console.log(!"");//true
console.log(!0);//true



let count=0;
let result =count || 10; //10;


//?? nullish coalescing better than or

let count1=0;
let result1 =count1??10;
console.log(result1);//0