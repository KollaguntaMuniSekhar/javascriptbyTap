// console.log(this);


// function fun(){
//     console.log(this);
// }
// fun();
const greet={
    name:"M",
    fun:function(){
        console.log(this);
    },
};
greet.fun();
