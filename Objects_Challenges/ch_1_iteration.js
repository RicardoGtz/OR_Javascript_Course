// iteration - hasOwnProperty
function phone(make,model,waranty,color){
    this.make=make;
    this.model=model;
    this.warranty=waranty ||12;
    this.color=color || "no color";
    this.endWarranty=function(){
        this.waranty=0;
    };
}
phone.prototype={
    extendWarranty:function(x){
        this.warranty+=x;
    }
}
var myPhone=new phone('Apple','Iphone 7');
console.log(myPhone);

/* add a method returnProperties to the phone prototye
which return the list of own properties (no methods)
of an instance as a list of thwo Arrays for properties
and one Array for values */

phone.prototype.returnProperties=function(){
    var attributes=[];
    attributes.name=new Array;   
    attributes.value=new Array;   
    for(var attribute in this){
        if(this.hasOwnProperty(attribute)&&(typeof this[attribute])!="function"){
            attributes.name.push(attribute)
            attributes.value.push(this[attribute]);
        }     
    }
    return attributes;
};
console.log(myPhone.returnProperties())