/* var amount=prompt("Type the amount");
var payment=prompt("Type the payment");
var amount=parseFloat(amount);
var payment=parseFloat(payment); */
var amount=535.56;
var payment=700;
var currency=[100,50,20,10,1];
var change=(payment-amount).toFixed(3);
console.log("Total change: "+change);
for(var i=0;i<currency.length;i++){
    var _quantity=Math.floor(change/currency[i]);
    change=change-(currency[i]*_quantity);
    if(_quantity>0)
        console.log("$"+currency[i]+" x"+_quantity);
}
console.log("$"+change.toFixed(2));

