//Functions as an attribute
var object={
    name: "Ricardo Gutierrez",
    method:function(){
        console.log(this.name);
    }
};
object.method();

//Functions as a parametter
function suma(a,b){
    return a+b;
}

function aplicaSuma(myFunction, a, b){
    return myFunction(a,b);
}

console.log(aplicaSuma(suma,5,4));

//Return a function
function sumaDos(a){
    return function(b){
        return a+b;
    }
}
console.log(sumaDos(5)(4));

aplicaSuma=sumaDos(5);
console.log(aplicaSuma(4));

//Little challenge
var array=[1,2,3,4,5];
function porDos(num){
    return num*2;
}
function recorre(myFunction, nums){
    var sumatoria=0;
    for(var i=0;i<nums.length;i++){
        sumatoria+=myFunction(nums[i]);
    }
    return sumatoria;
}

console.log(recorre(porDos,array));
