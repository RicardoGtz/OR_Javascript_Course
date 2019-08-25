/* *************************************
    inheritance using Object construct
************************************* */
var person={
    name:"Ricardo",
    age:22,
    sex:"Masculino",
    cel:"8332082484",
    greeten:function(){
        console.log("Hello");
    }
}
console.log(person);
//inheritence of person
var employee=Object.create(person);
employee.ssn="11929384",
employee.email="gtz.o.ricardo@gmail.com",
employee.work=function(){
                console.log("I'm a slave");
            }
console.log(employee);
employee.greeten();
console.log(employee.age);

/* *******************************************
    inheritance using constructor inheritance
*********************************************** */
//Super class
function phone(make,model,warranty,color){
    this.make=make;
    this.model=model;
    this.warranty=warranty||12;
    this.color=color;
}
phone.prototype.extendWarranty=function(x){
    this.warranty+=x;
}

//Sub Class
function smartPhone(make,model){
    this.make=make;
    this.model=model;
}

var myPhone=new smartPhone("Apple","Iphone 7");
console.log(myPhone);
console.log(smartPhone.prototype);
console.log(myPhone instanceof smartPhone);
console.log(myPhone instanceof Object);

smartPhone.prototype.endWarranty=function(){
    this.warranty=0;
}

myPhone.endWarranty();
console.log(myPhone);

// Inherit everything (Inside the constructor) from the superClass
//smartPhone.prototype.helper=phone;
//smartPhone.prototype.helper("Samsung","56",12,"gray");

var myPhone2=new smartPhone('Apple','Iphone 7');
console.log(myPhone2.color);
//console.log(myPhone2.extendWarranty(12)); //Not working because "extendWarranty" isn't in the constructor
console.log(myPhone2);

//Inherit everything including prototype from the superClass
smartPhone.prototype=new phone("Samsung","56",12,"gray"); //Set the prototype to smartPhone
smartPhone.prototype.constructor=smartPhone; //Set constructor back to smartPhone

var myPhone3=new smartPhone('Apple','Iphone 7');
console.log(myPhone3);
console.log(myPhone3.extendWarranty(12)); 
console.log(myPhone3);

//optional implementation for a extend method
function extend(childClass,parentClass){
    childClass.prototype=new parentClass();
    childClass.prototype.constructor=childClass;
}

//iterathe trough all the attributes and methods of a class
function iterateAttributes(givingClass){
    var auxInstance=new givingClass();    //Instance an object of the giving class
    for(var attribute in auxInstance){    //Iterate though all the attributes in the constructor and prototype
        if(auxInstance.hasOwnProperty(attribute)) //verifies if the attribute exist inside the constructor
            console.log(attribute+" in constructor");
        else
            console.log(attribute+" in prototype");
    }
}

//augmentation class (to do multli-inheritance)
function augment(recivingClass,givingClass){
    var instReciving=new recivingClass();
    var instGiving=new givingClass();
        // use "in" to check in all the atributes inside of the constructor and protoype
        // use "hasOwnProperty" to check only the ones inside the constructor
    for(var attribute in instGiving){
        if(!(attribute in recivingClass))
            recivingClass.prototype[attribute]=instGiving[attribute];
    }
}

iterateAttributes(smartPhone);
/* augment(smartPhone,phone);
var augmentPhone=new smartPhone('Apple','Iphone 7');
augmentPhone.extendWarranty(12);
console.log(augmentPhone.warranty); */

function cloneObject(object){
    var newObject=function(){};
    newObject.prototype=object;
    return new newObject();
}

console.log(myPhone3);
console.log((cloneObject(myPhone3)).warranty);