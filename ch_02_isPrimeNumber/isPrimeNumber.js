var num;

do{
    num=prompt("Type the number");
}while(!Number.isInteger(Number.parseInt(num)));

function isPrime(num){
    var divider=2;
    while((num%divider)!=0)
        divider++;
    if(divider==num)
        return true;
    else
        return false;
}

for(var i=2;i<num;i++){
    if(isPrime(i))
        console.log(i+" is a prime number");
}

birthDate=new Date(1997,4,12);
console.log(birthDate.getDay());

var initTime=Date.now();
//Calculate how much time it takes to execute this
var sum=0;
for(i =0;i<100000;i++){
    sum+=i;
}
var endTime=Date.now();
console.log(endTime);
var difTime=endTime-initTime;
console.log(difTime);