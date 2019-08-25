/* create a function which takes an object and returns
the list of own and inherited properties/methods and 
values of the object: climb up the prototype Chain
Return format: list of two arrays */

function getAllProperties(obj){
    var properties=[];
    var values=[];
    var currentObj=obj;
    while(currentObj!==null){
        var currentProperties=Object.getOwnPropertyNames(currentObj);
        currentProperties.forEach((attribute)=>{
            properties.push(attribute);
            values.push(currentObj[attribute]);
        });
        currentObj=Object.getPrototypeOf(currentObj);
    }
    return [properties,values]
}
console.log(getAllProperties(new Array));