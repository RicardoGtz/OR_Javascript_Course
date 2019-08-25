//Understanding closures
var n;
function f(x){
    n=function(){
        return x;
    }
    x++;
}
f(123);
console.log(n());

//Closure with event loops Cummon errors
//Exp.1
for(var i =0;i<3;i++){
    document.getElementById(i).onclick=setId(i);
}
function setId(id){
    return function(){console.log(id)}
}

//Challenge
var f=run([4,8,1,3]);

console.log(f());//4
console.log(f());//3
console.log(f());//1
console.log(f());//8
console.log(f());//4
console.log(f());//3
console.log(f());
console.log(f());
console.log(f());

function run(array){
    var jump=-3;
    return function setJump(){
        jump+=3;
        return array[(jump)%4];
    }
}

