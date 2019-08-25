/* ******************************************
    Class with public attributes and methods
********************************************* */
var phone=function(brand,storage,memory){
    this.setBrand(brand);
    this.setStorage(storage);
    this.setMemory(memory);
}
//All the methods are asigned to the prototype
phone.prototype={
    setBrand:function(brand){
        this.brand=brand;
    },
    setStorage:function(storage){
        this.storage=storage;
    },
    setMemory:function(memory){
        this.memory=memory;
    }
}
var myPhone=new phone("Samsung","64gb","4gb");
console.log(myPhone);
/* *************************************************************
    Class with private attributes and methods (using closures)
**************************************************************** */
var phone2=function(newBrand,newStorage,newMemory){
    //Private attributes
    var brand,storage,memory;
    //private methods
    function validBrand(brand){
        return brand=="Samsung"||brand=="Sony";
    }
    //privileged Methods(acces to private attributes and methods)
    this.setBrand=function (newBrand){
        if(validBrand(newBrand))
            brand=newBrand; //Without using "this" because the variable already existed in the prototype
    }
    this.setStorage=function (newStorage){
        storage=newStorage;
    }
    this.setMemory=function(newMemory){
        memory=newMemory;
    }
    this.getBrand=function (newBrand){
        return brand;
    }
    this.getStorage=function (newStorage){
        return storage;
    }
    this.getMemory=function(newMemory){
        return memory;
    }
    //The constructor of the class
    this.setMemory(newBrand);
    this.setBrand(newBrand);
    this.setStorage(newStorage);
};

var myPhone2=new phone2("Samsung","128gb","6bd");
console.log(myPhone2);
console.log(myPhone2.getBrand());
myPhone2.setBrand("Sony");
console.log(myPhone2.getBrand());
myPhone2.setBrand("Huawei");
console.log(myPhone2.getBrand());
//console.log(myPhone2.validBrand("Huawei")); // <-- Throws an error because the function does not exist in the context
myPhone2.brand="Huawei";//This property is added to the object but does not interact with the methods
console.log(myPhone2.getBrand());
console.log(myPhone2.brand);

/* **************************************************
Class using a IIFE (Immediately invoked function)
with private static attributes and methods
************************************************** */
var phoneInvoker=function(){
    //private static variable
    var phonesNum=0;
    //private static method
    function validBrand(brand){
        return brand=="Samsung"||brand=="Sony";
    }
    //Constructor
    var phone=function(newBrand,newStorage,newMemory){
        //Private attributes
        var brand,storage,memory;
       
        //privileged Methods(acces to private attributes and methods)
        this.setBrand=function (newBrand){
            if(validBrand(newBrand))
                brand=newBrand; //Without using "this" because the variable already existed in the prototype
        }
        this.setStorage=function (newStorage){
            storage=newStorage;
        }
        this.setMemory=function(newMemory){
            memory=newMemory;
        }
        this.getBrand=function (newBrand){
            return brand;
        }
        this.getStorage=function (newStorage){
            return storage;
        }
        this.getMemory=function(newMemory){
            return memory;
        }
        //The constructor of the class
        if(phonesNum<3){
            this.setMemory(newBrand);
            this.setBrand(newBrand);
            this.setStorage(newStorage);
        }else
            throw new Error("To many phones");
        phonesNum++;
        

    }
    return phone;
}();

var myPhone3=new phoneInvoker("Samsung","128gb","6bd");
var myPhone4=new phoneInvoker("Samsung","128gb","6bd");
var myPhone5=new phoneInvoker("Samsung","128gb","6bd");
//var myPhone6=new phoneInvoker("Samsung","128gb","6bd"); throws and error because there are more than 4 phones
console.log(myPhone3);