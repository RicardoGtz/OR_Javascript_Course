var myPhone={
    make:"Samsung",
    model:"S6"  
};
console.log(Object.getPrototypeOf(myPhone));
console.log(Object.getOwnPropertyNames(myPhone));

/* create a function which takes ans object and returns the 
list of own properties and methods of the object's
prototype: use getPrototypeOf and getOwnPropetyNames.
return format: list of two arrays */

var returnProperties=function(obj){
    var preperties= Object.getOwnPropertyNames(Object.getPrototypeOf(obj));
    var values=[];
    preperties.forEach((attribute)=>{
        values.push(obj[attribute]);
    });

    return[preperties,values];

}

console.log(returnProperties(myPhone))