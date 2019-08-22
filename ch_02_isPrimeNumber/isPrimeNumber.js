var num;

do{
    num=prompt("Type the number");
}while(!Number.isInteger(Number.parseInt(num)));

function isPrime(num){
    var divider=2;
    while((num%divider)!=0)
        divider++;
    if(divider==num)
        console.log(num+" is a prime number");
    else
        console.log(num+" is nota prime number, is divided by "+divider);

}

isPrime(num);